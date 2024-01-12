import React, { useState } from 'react';
import FormError from './FormError';
import FormLabel from './FormLabel';

const FormSelect = ({ label, options, value, required, message, onChange }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);

  const renderOptions = options.map((option, index) => <Option key={index} value={option} />);

  return (
    <div className='flex flex-col'>
      <FormLabel label={label} />
      <select
        value={value}
        onChange={onChange}
        name={label}
        className='p-1 outline-none bg-whitish rounded text-blackish'
        required={required}
        onBlur={handleFocus}
        focused={focused.toString()}
      >
        <option value=''>--- Donation type ---</option>
        {renderOptions}
      </select>
      <FormError message={message} />
    </div>
  );
};

export default FormSelect;

const Option = ({ value }) => <option value={value}>{value}</option>;
