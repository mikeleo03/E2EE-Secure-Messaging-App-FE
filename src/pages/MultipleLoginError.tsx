import React from 'react';
import MultipleLogin from '../components/MultipleLogin';

const MultipleLoginError: React.FC = () => {
  //   const navigate = useNavigate();
  //   const [multipleLogin, setMultipleLogin] = useState(0);

  //   useEffect(() => {
  //     socket.on('connect_error', (err) => {
  //       setMultipleLogin(1);
  //     });

  //     setTimeout(() => {
  //       if (multipleLogin !== 1) {
  //         setMultipleLogin(-1);
  //       }
  //     }, 1000);

  //     if (multipleLogin === -1) {
  //       navigate('/', { replace: true });
  //     }
  //     console.log(multipleLogin);
  //   }, [multipleLogin]);
  return <MultipleLogin />;
};

export default MultipleLoginError;
