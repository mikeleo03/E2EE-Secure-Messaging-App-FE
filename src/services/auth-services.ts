import services from '.';

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
  const res = await services.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export default { login, getMyProfile };
