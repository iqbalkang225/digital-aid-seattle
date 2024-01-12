import React from 'react';

const FormError = ({ message }) => {
  return <span className='text-xs mt-2 text-blackish invisible'>{message}</span>;
};

export default FormError;
