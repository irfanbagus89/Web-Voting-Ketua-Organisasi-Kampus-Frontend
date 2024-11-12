import React, { forwardRef } from 'react';


const Button = forwardRef(({ children, onClick, disabled, type = 'button', className = '' },ref) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
});

export default Button;
