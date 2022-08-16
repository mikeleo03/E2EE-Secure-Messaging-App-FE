import axios from 'axios';
import services from '.';
import config from '../config';

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const res = await axios.post(`${config.API_URL}/auth`, {
    identifier: username,
    password,
  });
  return res.data;
};

const getMyProfile = async (token: string) => {
  const res = await axios.get(`${config.API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export default { login, getMyProfile };
