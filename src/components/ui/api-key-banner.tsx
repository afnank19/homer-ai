import { KeyIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import  ApiKeyModal from "./api-key-modal";

const apiKeyTrueStyle = "absolute left-3 bottom-16 bg-green-100 p-1 px-2 rounded-2xl border border-green-400 flex items-center gap-1 text-green-800 hover:cursor-pointer"
const apiKeyFalseStyle = "absolute left-3 bottom-16 bg-red-100 p-1 px-2 rounded-2xl border border-red-400 flex items-center gap-1 text-red-800 hover:cursor-pointer"

const ApiKeyBanner = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [keyExists, setKeyExists] = useState<Boolean>(false);

  useEffect(() => {
    const key = localStorage.getItem("api-key");

    if (key) {
        setKeyExists(true)
    }
  }, [keyExists])

  return (
    <>
      <button
        className={keyExists ? apiKeyTrueStyle : apiKeyFalseStyle}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <KeyIcon />
        {keyExists ? "API key Set" : "Warning: Set API key"}
      </button>
      {open ? <ApiKeyModal setOpen={setOpen} setKeyExists={setKeyExists} /> : null}
    </>
  );
};

export default ApiKeyBanner;
