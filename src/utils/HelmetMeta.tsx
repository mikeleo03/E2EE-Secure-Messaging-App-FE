import React from 'react';
import { Helmet } from 'react-helmet';

interface HelmetMetaProps {
  title: string;
  description: string;
}

const HelmetMeta: React.FC<HelmetMetaProps> = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} - DEVA: OSKM ITB 2022</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default HelmetMeta;
