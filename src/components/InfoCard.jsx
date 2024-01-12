import React from 'react';
import Info from './Info';
import Flex from './Flex';

const InfoCard = ({ donations }) => {
  // Returns the total amount value of donations based on their type.
  const donationTotal = (type) => {
    return donations.filter((donation) => donation.type === type).reduce((acc, curr) => acc + Number(curr.amount), 0);
  };

  return (
    <div className='card flex flex-col justify-between h-48'>
      <Info label='Donations' amount={donations.length} />

      <Flex classes='justify-between'>
        <Info label='Money' amount={donationTotal('money')} />
        <Info label='Food' amount={donationTotal('food')} />
        <Info label='Clothing' amount={donationTotal('clothing')} />
      </Flex>
    </div>
  );
};

export default InfoCard;
