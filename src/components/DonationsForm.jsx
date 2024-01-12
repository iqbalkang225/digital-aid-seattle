import React, { useState, useEffect } from 'react';

import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { getLocalStorage } from '../utils/localStorage';
import { inputs } from '../data/inputs';
import Backdrop from './Backdrop';

const formContainerClasses =
  'w-[90%] absolute rounded-md left-0 right-0 mx-auto bg-gradient-to-b from-orangish via-orange-500 to-reddish p-6 top-1/2 -translate-y-1/2';

const DonationsForm = ({ onDonationAdd, toggleDonationsForm, isEditing, editDonationId, onDonationEdit }) => {
  const initialValues = {
    name: '',
    type: '',
    amount: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  // Updates the form inputs as the user types.
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handles form submission:
  // - Returns form values to initial state and closes the form modal
  // - If editing mode is true, edits the item; else, adds a new item to the donations list
  const onSubmit = (e) => {
    e.preventDefault();

    setValues(initialValues);
    toggleDonationsForm();

    if (isEditing) return onDonationEdit(editDonationId, values);
    else return onDonationAdd(values);
  };

  // Checks if editing mode is true when the input form modal is opened.
  // If true, fills form input values with the values of the item being edited.
  useEffect(() => {
    if (isEditing) {
      const donations = getLocalStorage('donations');

      const donationToEdit = donations.find((donation) => donation.id === editDonationId);

      setValues({ ...donationToEdit });
    }
  }, [isEditing]);

  // Renders form inputs from the INPUTS data file.
  // If the type of an input is SELECT, <FormSelect /> component is returned.
  // If the type is input, <FormInput /> component is returned.
  const renderInputs = inputs.map((input, index) => {
    const { type, label } = input;

    if (type === 'select') return <FormSelect key={index} onChange={changeHandler} value={values[label]} {...input} />;
    else return <FormInput key={index} onChange={changeHandler} value={values[label]} {...input} />;
  });

  return (
    <>
      <Backdrop onClick={toggleDonationsForm} />

      <div className={formContainerClasses}>
        <h3 className='text-xl font-bold mb-4 text-center'>Add a Dontaion</h3>

        <form onSubmit={onSubmit} className='space-y-2'>
          {renderInputs}
          <button className='w-full py-2 bg-blackish/50 rounded'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default DonationsForm;
