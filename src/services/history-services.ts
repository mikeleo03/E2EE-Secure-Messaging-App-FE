import axios from 'axios';
import Cookies from 'universal-cookie';
import services from '.';
import config from '../config';

export const getAllHistories = async (userId: string) => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await axios.get(`${config.API_URL}/history/${userId}`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });
  return res.data;
};

export const getOneHistory = async (userId: string, chatId: string) => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await axios.get(`${config.API_URL}/history/${userId}/${chatId}`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });
  return res.data;
};
