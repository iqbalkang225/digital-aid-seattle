import React from 'react';

const Info = ({ label, amount }) => {
  return (
    <div className='space-y-0.5'>
      <p className='text-xs text-grayish'>{label}</p>
      <p className='font-bold'>
        {label === 'Money' && '$'}
        {amount}
      </p>
    </div>
  );
};

export default Info;
