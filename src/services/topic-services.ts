import axios from 'axios';
import Cookies from 'universal-cookie';
import services from '.';
import config from '../config';

export const getAllTopics = async () => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  console.log('Getting topics', cookies.token);
  const res = await axios.get(`${config.API_URL}/topics`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });
  return res.data;
};
