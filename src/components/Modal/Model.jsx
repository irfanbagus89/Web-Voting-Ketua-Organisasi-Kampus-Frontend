import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-4 shadow-lg w-96">
        <button onClick={onClose} className="text-red-500 float-right">Close</button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
