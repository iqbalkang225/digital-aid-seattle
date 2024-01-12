import React from 'react';

import { MdDelete, MdEdit, MdFastfood } from 'react-icons/md';
import { IoShirt } from 'react-icons/io5';
import { FaSackDollar } from 'react-icons/fa6';
import { renderDate } from '../utils/renderDate';
import Flex from './Flex';

const donationClasses = 'flex justify-between items-center bg-grayish/20 p-2 rounded-lg border border-grayish/50 group';

const editDeleteButtonClasses =
  'text-xs cursor-pointer opacity-0 group-hover:opacity-100 hover:text-orangish duration-200';

const iconContainerClasses = 'bg-white h-10 w-10 rounded-full flex justify-center items-center';

const typeIconClasses = 'text-orangish h-5 w-5';

const Donation = ({ type, name, date, amount, id, handleDelete, handleEdit }) => {
  // Renders a specific icon based on the type of an item.
  const renderDonationTypeIcon = () => {
    if (type === 'money') return <FaSackDollar className={typeIconClasses} />;
    if (type === 'food') return <MdFastfood className={typeIconClasses} />;
    if (type === 'clothing') return <IoShirt className={typeIconClasses} />;
  };

  return (
    <div className={donationClasses}>
      <Flex>
        <div className={iconContainerClasses}>{renderDonationTypeIcon()}</div>

        <div className='space-y-0.5'>
          <p className='capitalize'>{name}</p>
          <p className='text-xs text-grayish'>{renderDate(date)}</p>
        </div>
      </Flex>

      <Flex>
        <MdDelete className={editDeleteButtonClasses} onClick={handleDelete.bind(null, id)} />
        <MdEdit className={editDeleteButtonClasses} onClick={handleEdit.bind(null, id)} />
        <p>
          {type === 'money' && '$'}
          {amount}
        </p>
      </Flex>
    </div>
  );
};

export default Donation;
