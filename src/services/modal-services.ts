import services from '.';

export const submitReport = async ({
  chat_id,
  reporter_id,
  reported_id,
  reason,
}: {
  chat_id: string;
  reporter_id: string;
  reported_id: string;
  reason: string;
}) => {
  const res = await services.post('/reports', {
    chat_id,
    reporter_id,
    reported_id,
    reason,
  });
  return res.data;
};

export const requestNewTopic = async (name: string) => {
  const res = await services.post('/request-topics', {
    name,
  });
  return res.data;
};
