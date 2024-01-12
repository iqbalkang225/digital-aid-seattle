import React, { useState } from 'react';
import FormError from './FormError';
import FormLabel from './FormLabel';

const FormInput = ({ label, type, value, message, onChange, required }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);

  return (
    <div className='flex flex-col'>
      <FormLabel label={label} />
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={label}
        className='p-1 outline-none bg-whitish rounded text-blackish'
        required={required}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <FormError message={message} />
    </div>
  );
};

export default FormInput;
