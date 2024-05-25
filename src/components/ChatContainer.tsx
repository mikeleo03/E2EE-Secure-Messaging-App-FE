/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSend } from 'react-icons/ai';
import { ChatData } from '../interfaces/chat';
import socket from '../socket';
import ChatBubble from './ChatBubble';
import Dialogist from './Dialogist';
import { CryptoNight } from '../algorithms/cryptonight';
import { deriveKeys } from '../algorithms/ECDH/ECDHUtils';
import { ECPoint } from '../algorithms/ECC/EllipticCurve';
import { getWithExpiry } from '../utils/expiryStorage';

interface ChatContainerProps {
  myName?: string;
  myNIM?: string;
  dialogist?: string;
  handleReveal: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  myName,
  myNIM,
  dialogist,
  handleReveal,
}) => {
  const [message, setMessage] = useState('');
  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [signMessage, setSignMessage] = useState(false);

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    socket.on('messageReceive', async ({ encrypted }) => {
      // RECEIVER RECEIVING MESSAGE PROTOCOL
      // Get the shared keys from local storage
      const userSharedSecret = getWithExpiry(socket.id);
      if (userSharedSecret) {
        const { x, y } = JSON.parse(userSharedSecret);
        const sharedSecret = new ECPoint(
          BigInt(x as string),
          BigInt(y as string)
        );

        // Server decrypts the message from Sender
        const plaintextUserServer = await CryptoNight.decryptFromHex(
          encrypted,
          deriveKeys(sharedSecret)
        );

        // Parse the response
        const { content, from } = JSON.parse(plaintextUserServer);
        console.log('Decrypted (Server-Receiver):', content);

        setChatData((prevData) => [
          { message: content, isFromMe: false },
          ...prevData,
        ]);
      } else {
        toast.error(
          'Our secure connection has expired. To re-establish it, please end this chat and try again.'
        );
      }
    });
  }, []);

  const sendMessage = async () => {
    if (message !== '') {
      // SENDER SENDING MESSAGE PROTOCOL
      // Get the shared keys from local storage
      const userSharedSecret = getWithExpiry(socket.id);
      if (userSharedSecret) {
        const { x, y } = JSON.parse(userSharedSecret);
        const sharedSecret = new ECPoint(
          BigInt(x as string),
          BigInt(y as string)
        );

        let messageContent = message;
        if (signMessage) {
          // Add your signing logic here
          // TODO : Connect it
          // messageContent = sign(messageContent);
        }

        // User sent the message to Server using shared secret between User and Server
        const ciphertextAliceServer = await CryptoNight.encryptToHex(
          messageContent,
          deriveKeys(sharedSecret)
        );
        console.log('Encrypted (Sender-Server):', ciphertextAliceServer);
        socket.emit('message', { encrypted: ciphertextAliceServer });
        setMessage('');
        setChatData((prevData) => [
          { message: messageContent, isFromMe: true },
          ...prevData,
        ]);
      } else {
        toast.error(
          'Our secure connection has expired. To re-establish it, please end this chat and try again.'
        );
      }
    }
  };

  const onEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key == 'Enter' && event.shiftKey == false && width > 768) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        className="w-40"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white h-[100%] w-[777px] lg:w-[450px] xl:w-[500px] xxl:w-[600px] 3xl:w-[680px] rounded-[15px]">
        <div className="h-[15%] lg:hidden">
          <Dialogist dialogist={dialogist} handleReveal={handleReveal} />
        </div>
        <div className="xs:h-[55vh] lg:h-[68vh] w-[100%] lg:rounded-t-[15px] flex flex-col-reverse max-w-[100%] px-2 pt-2 overflow-y-scroll overflow-x-hidden">
          {chatData.map((chat, idx) => (
            <ChatBubble key={idx} sent={chat.isFromMe}>
              {chat.message}
            </ChatBubble>
          ))}
        </div>
        <div className="xs:h-[10vh] lg:h-[20%] bg-white border-solid border-t-2 border-primaryOrange flex justify-between items-center xs:px-4 lg:px-8 rounded-b-[15px] py-4">
          <textarea
            placeholder="Enter a message"
            className="resize-none outline-none w-[100%] h-[80%] xs:mr-4 lg:mr-10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={onEnterPress}
          />

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={signMessage}
              onChange={(e) => setSignMessage(e.target.checked)}
              className="form-checkbox h-5 w-5 text-primaryOrange"
            />
            <span className="text-sm pr-4">Sign</span>
          </label>

          <div
            onClick={sendMessage}
            className="bg-primaryOrange h-[51px] w-[51px] min-w-[51px] rounded-full flex justify-center items-center text-[30px] text-white cursor-pointer"
          >
            <AiOutlineSend />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
