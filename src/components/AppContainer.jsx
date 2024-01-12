import React, { useState, useEffect } from 'react';

import InfoCard from './InfoCard';
import DonationsContainer from './DonationsContainer';
import DonationsForm from './DonationsForm';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';
import Header from './Header';

const appContainerClasses = 'max-w-[400px] w-full bg-blackish px-6 flex flex-col gap-6 relative';

const AppContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editDonationId, setEditDonationId] = useState();
  const [donations, setDonations] = useState(getLocalStorage('donations'));

  // Toggles the input form and sets setIsEditing to false.
  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
    setIsEditing(false);
  };

  // ADD a new item to the donation list.
  // Before adding the item, a random ID is generated and added to the item.
  // UPDATES the donation list.
  const addDonation = (newDonation) => {
    const donationWithId = { ...newDonation, id: Date.now() };
    setDonations((prevState) => [...prevState, donationWithId]);
  };

  // DELETES an item from donation list.
  // ACCEPTS an ID of the item to be deleted.
  // UPDATES the donation list with a new list of remaining items after the deletion.
  const deleteDonation = (id) => {
    const remainingDonations = donations.filter((donation) => donation.id !== id);
    setDonations(remainingDonations);
  };

  // Opens the user input form and sets editing mode to true for the item with the given ID.
  const editDonation = (id) => {
    setIsEditing(true);
    setShowForm(true);
    setEditDonationId(id);
  };

  // Updates a donation item after user edits and clicks SUBMIT.
  // Finds and edits the item in the list, then updates local storage.
  // ACCEPTS an item and ID of the item which is going to be edited.
  const onDontaionEditComplete = (id, editedDonation) => {
    const editDonationIndex = donations.findIndex((donation) => donation.id === id);

    donations[editDonationIndex] = editedDonation;
    setLocalStorage('donations', donations);
  };

  // Updates local storage when a donation item is added or removed from the existing list.
  // Triggered after a new item is added or deleted.
  useEffect(() => {
    setLocalStorage('donations', donations);
  }, [donations]);

  // Returns the user input form modal if showForm is TRUE.
  const renderDontaionsForm = () => {
    if (showForm)
      return (
        <DonationsForm
          onDonationAdd={addDonation}
          toggleDonationsForm={toggleForm}
          isEditing={isEditing}
          editDonationId={editDonationId}
          onDonationEdit={onDontaionEditComplete}
        />
      );
  };

  return (
    <div className={appContainerClasses}>
      <Header />

      <InfoCard donations={donations} />

      <DonationsContainer
        donations={donations}
        onDonationDelete={deleteDonation}
        onDonationEdit={editDonation}
        toggleDonationsForm={toggleForm}
      />

      {renderDontaionsForm()}
    </div>
  );
};

export default AppContainer;
