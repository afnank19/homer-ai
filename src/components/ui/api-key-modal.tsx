import { useState, type Dispatch, type SetStateAction } from "react";
import { GraphIcon } from "@phosphor-icons/react";

type ApiKeyModalProps = {
  setOpen: Dispatch<SetStateAction<Boolean>>;
  setKeyExists: Dispatch<SetStateAction<Boolean>>;
};

const ApiKeyModal = ({ setOpen, setKeyExists }: ApiKeyModalProps) => {
  const [input, setInput] = useState<string>("");

  const handleClick = () => {
    if (input == "") {
        return;
    }

    localStorage.setItem("api-key", input)
    setKeyExists(true);
    setOpen(false);
  };

  return (
    <div className="bg-[#f5f4ed] absolute top-1/2 left-1/2 -translate-1/2 p-2 px-4 w-1/3  flex flex-col items-center justify-between rounded-xl drop-shadow-md">
      <h1 className="text-xl flex items-center gap-1 font-medium w-full border-b py-2 border-gray-300">
        <GraphIcon />
        Add your Groq API key here
      </h1>
      <div className="w-full flex justify-between p-2  items-center m-2 mb-0 border rounded border-gray-400  bg-white">
        <input
          className="flex-1 p-2 focus:outline-0"
          placeholder="Groq API key"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter" && input !== "") {
                handleClick();
            }
          }}
        ></input>
        <button
          onClick={handleClick}
          className="cursor-pointer px-3 py-1 rounded-md  text-white bg-[#c96442] hover:bg-[#f8916f]"
        >
          Set Key
        </button>
      </div>
    </div>
  );
};

export default ApiKeyModal;
