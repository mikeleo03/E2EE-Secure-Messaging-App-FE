import Cookies from 'universal-cookie';
import services from '.';

export const getAllHistories = async (userId: string) => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await services.get('/history/' + userId, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });
  return res.data;
};

export const getOneHistory = async (userId: string, chatId: string) => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await services.get(`/history/${userId}/${chatId}`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });
  return res.data;
};
