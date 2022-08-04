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

export default { login };
