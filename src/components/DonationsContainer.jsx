import React, { useState } from 'react';

import { IoIosAdd } from 'react-icons/io';
import { inputs } from '../data/inputs';
import Donation from './Donation';
import Flex from './Flex';
import SmallText from './SmallText';

const DonationsContainer = ({ toggleDonationsForm, donations, onDonationDelete, onDonationEdit }) => {
  const [filter, setFilter] = useState('all');

  const handleDelete = (id) => {
    onDonationDelete(id);
  };

  const handleEdit = (id) => {
    onDonationEdit(id);
  };

  // Filters donations based on the donation type.
  const filteredDonations = donations.filter((donation) => {
    if (filter === 'all') return donation;
    else return donation.type === filter;
  });

  // Updates the currently selected filter type.
  const filterDonations = (selectedFilter) => setFilter(selectedFilter);

  // Renders the donation items that match the selected filter.
  // const renderDonationsList = filteredDonations.map((donation, index) => (
  //   <Donation key={index} {...donation} handleDelete={handleDelete} handleEdit={handleEdit} />
  // ));

  // Renders the donation items that match the selected filter.
  const renderDonationsList = () => {
    if (!filteredDonations.length) return <EmptyDonationContainer />;
    return filteredDonations.map((donation, index) => (
      <Donation key={index} {...donation} handleDelete={handleDelete} handleEdit={handleEdit} />
    ));
  };

  // Finds and returns filter options available from ['money', 'food', 'clothing'] with 'all' added.
  const filterButtons = inputs
    .find((input) => input.type === 'select')
    .options.reduce((acc, curr) => [...acc, curr], ['all']);

  // Renders filter buttons based on the available filter options.
  const renderFilterButtons = filterButtons.map((btn, index) => (
    <button
      className={`capitalize ${filter === btn ? 'text-orangish' : ''}`}
      key={index}
      onClick={filterDonations.bind(null, btn)}
    >
      {btn}
    </button>
  ));

  return (
    <div className='flex-1 flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold'>Donations List</h3>
        <button>
          <IoIosAdd
            className='w-8 h-8 text-whitish bg-orangish rounded-full hover:bg-whitish hover:text-orangish duration-200'
            onClick={toggleDonationsForm}
          />
        </button>
      </div>

      <Flex classes='justify-around'>{renderFilterButtons}</Flex>

      <div className='space-y-2 grow h-0 overflow-y-scroll'>{renderDonationsList()}</div>
    </div>
  );
};

export default DonationsContainer;

const EmptyDonationContainer = () => {
  return (
    <Flex classes='h-full'>
      <SmallText>No Dontaions Found</SmallText>
    </Flex>
  );
};
