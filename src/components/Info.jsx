import React from 'react';
import SmallText from './SmallText';

const Info = ({ label, amount }) => {
  return (
    <div className='space-y-0.5'>
      <SmallText>{label}</SmallText>
      <p className='font-bold'>
        {label === 'Money' && '$'}
        {amount}
      </p>
    </div>
  );
};

export default Info;
