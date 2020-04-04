import React from 'react';

const Error = ({ error, type }) => {
  console.log(error);

  return (
    <div>
      <p>Hmmm looks like that {type} doesn't exists!</p>
    </div>
  );
};

export default Error;
