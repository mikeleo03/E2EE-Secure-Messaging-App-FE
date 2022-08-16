import axios from 'axios';
import Cookies from 'universal-cookie';
import services from '.';
import config from '../config';

export const submitReport = async ({
  chat_id,
  issuer_id,
  reason,
}: {
  chat_id?: string | null;
  issuer_id?: string;
  reason: string;
}) => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await axios.post(
    `${config.API_URL}/reports`,
    { chat_id, issuer_id, reason },
    {
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    }
  );
  return res.data;
};

export const requestNewTopic = async (name: string) => {
  const res = await axios.post(`${config.API_URL}/request-topics`, {
    name,
  });
  return res.data;
};
