import { WarningIcon } from "@phosphor-icons/react";
import Modal from "./modal";
import { useEffect, useState } from "react";

const WarningBanner = () => {
  const [open, setOpen] = useState<Boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("tutorial") === null) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <button
        className="absolute left-3 bottom-4 bg-orange-100 p-1 px-2 rounded-2xl border border-yellow-400 flex items-center gap-1 text-yellow-800"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <WarningIcon />
        Feature Showcase
      </button>
      {open ? <Modal setOpen={setOpen} /> : null}
    </>
  );
};

export default WarningBanner;
