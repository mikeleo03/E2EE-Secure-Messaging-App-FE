import Cookies from 'universal-cookie';
import services from '.';

export const getAllTopics = async () => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await services.get('/topics', {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });
  return res.data;
};
