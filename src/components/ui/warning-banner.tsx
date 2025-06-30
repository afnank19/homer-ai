import { WarningIcon } from "@phosphor-icons/react";

const WarningBanner = () => {
  return (
    <div className="absolute left-3 bottom-4 bg-orange-100 p-1 px-2 rounded-2xl border border-yellow-400 flex items-center gap-1 text-yellow-800">
      <WarningIcon />
      Feature Showcase
    </div>
  );
};

export default WarningBanner;
