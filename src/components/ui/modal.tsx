import { useState, type Dispatch, type SetStateAction } from "react";
import TabComplete from "./modal/tab-complete";
import InputBox from "./modal/input-box";
import DiffPage from "./modal/diff-page";
import { RocketLaunchIcon } from "@phosphor-icons/react";

type ModalProps = {
  setOpen: Dispatch<SetStateAction<Boolean>>;
};

const Modal = ({ setOpen }: ModalProps) => {
  const [index, setIndex] = useState<number>(0);

  const pages = [<TabComplete />, <InputBox />, <DiffPage />];

  const handleClick = () => {
    if (index > 1) {
      localStorage.setItem("tutorial", "done");
      setOpen(false);
      return;
    }
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-[#f5f4ed] absolute top-1/2 left-1/2 -translate-1/2 p-2 px-4 w-1/3 h-1/2 flex flex-col items-center justify-between rounded-xl drop-shadow-md">
      <h1 className="text-xl flex items-center gap-1 font-medium w-full border-b py-2 border-gray-300">
        <RocketLaunchIcon />
        Get Started
      </h1>
      {pages[index]}
      <div className="w-full flex justify-end p-4">
        <button
          onClick={handleClick}
          disabled={index > 2}
          className="cursor-pointer px-3 py-1 rounded-md  text-white bg-[#c96442] hover:bg-[#f8916f]"
        >
          {index > 1 ? "Let's Go" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
