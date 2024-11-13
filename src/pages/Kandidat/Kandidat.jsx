import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Plus } from "../../assets";
function Kandidat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full min-h-[85vh] p-4">
      <div className="w-full h-auto">
        <h1 className="text-2xl font-semibold">KANDIDAT</h1>
      </div>
      <div className="w-full h-auto mt-10">
        <Button
          onClick={() => setOpen(!open)}
          className={"w-32 text-white bg-green-600 hover:bg-green-700"}
        >
          <div className="w-full h-auto flex justify-evenly items-center">
            <Plus />
            <p className="text-md font-medium inline-block pb-1">Tambah</p>
          </div>
        </Button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold">Modal Title</h2>
          <p>This is a modal content.</p>
        </Modal>
        <Card></Card>
      </div>
    </div>
  );
}

export default Kandidat;
