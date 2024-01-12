import React from 'react';

const Flex = ({ children, classes }) => {
  let baseClasses = 'flex gap-2 items-center justify-center ';

  if (classes) baseClasses = baseClasses + classes;

  return <div className={baseClasses}>{children}</div>;
};

export default Flex;
