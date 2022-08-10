import services from '.';
import { UserData } from '../interfaces/auth';

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const res = await services.post('/auth', { identifier: username, password });
  return res.data;
};

const getMyProfile = async (token: string) => {
  const res = (await services.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) as UserData;

  return res;
};

export default { login, getMyProfile };
