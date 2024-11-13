import React from "react";
import Button from "../Button/Button";
import { X } from "../../assets";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-4 shadow-lg w-96">
        <Button
          onClick={onClose}
          className={"w-1 text-red-500 float-right text-xl"}
          children={<X />}
        />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
