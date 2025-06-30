import { SnowflakeIcon } from "@phosphor-icons/react";

const MobileFallback = () => {
  return (
    <div className="lg:hidden h-screen flex flex-col items-center justify-center max m-2 gap-4">
      <SnowflakeIcon size={"2.5rem"} color="#c96442" />
      <p className="text-xl font- text-center">
        Homer* [AI] is intended for use on a desktop.<br></br>
        Switch to a bigger screen and comeback.
      </p>
    </div>
  );
};

export default MobileFallback;
