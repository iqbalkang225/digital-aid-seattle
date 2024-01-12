import React from 'react';

const Backdrop = ({ onClick }) => {
  return (
    <div
      className='h-full w-full absolute backdrop-blur-sm bg-blackish/95 left-0  cursor-pointer'
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
