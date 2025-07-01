import { SnowflakeIcon } from "@phosphor-icons/react";

const Thinking = () => {
  return (
    <div className="flex gap-1 ml-4">
      <SnowflakeIcon size={"1.5rem"} color="#c96442" className="animate-spin" />
      <p>Thinking</p>
    </div>
  );
};

export default Thinking;
