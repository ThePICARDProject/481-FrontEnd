import React from 'react';

const Parameter = ({ parameterType, placeholder }) => {
  return (
    <input type={parameterType} placeholder={placeholder} className="rounded-3xl m-4" />
  );
};

export default Parameter;