import React, { FC } from 'react';
import { ApolloError } from 'apollo-client';

interface ErrorProps {
  error: ApolloError;
  type: string;
}

const Error: FC<ErrorProps> = ({ error, type }) => {
  console.log(error);

  return (
    <div>
      <p>Hmmm looks like that {type} doesn't exists!</p>
    </div>
  );
};

export default Error;
