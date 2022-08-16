import axios from 'axios';
import Cookies from 'universal-cookie';
import config from '../config';
import { GetSessionResponse } from '../interfaces/auth';

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

const canConnectSocket = async (username: string) => {
  const cookie = new Cookies();
  const cookies = cookie.getAll();
  const res = await axios.get(`${config.API_URL}/socket-connect`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  });

  return res.data as GetSessionResponse;
};

export default { login, getMyProfile, canConnectSocket };
