import React, { useEffect, useState } from 'react';
import Matched from '../components/Matched';
import MatchingUp from '../components/MatchingUp';
import NoUserFound from '../components/NoUserFound';

const Matchmaking: React.FC = () => {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setStatus(0);
    }, 3000);
    setTimeout(() => {
      setStatus(1);
    }, 3000);
  }, []);
  return (
    <>
      {status === 0 ? (
        <MatchingUp />
      ) : status === 1 ? (
        <Matched />
      ) : (
        <NoUserFound />
      )}
    </>
  );
};

export default Matchmaking;
