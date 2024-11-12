import React, { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', placeholder, value, onChange, onKeyDown, className = '' }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={ref} 
      className={`px-2 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
    />
  );
});

export default Input;
