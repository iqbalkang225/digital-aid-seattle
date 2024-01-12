import React from 'react';

import Flex from './Flex';
import logo from '../images/logo.png';
import { timeOfTheDay } from '../utils/greeting';

const Header = () => {
  return (
    <Flex classes='justify-between mt-6'>
      <Flex>
        <img src={logo} alt='shelter logo' className='h-5' />
        <h1 className='font-bold text-lg'>Sheltero</h1>
      </Flex>

      <h2 className='font-bold text-lg'> {timeOfTheDay()}</h2>
    </Flex>
  );
};

export default Header;
