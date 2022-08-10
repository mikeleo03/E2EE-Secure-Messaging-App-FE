import Cookies from 'universal-cookie';
import services from '.';

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
  const res = await services.post(
    '/reports',
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
  const res = await services.post('/request-topics', {
    name,
  });
  return res.data;
};
