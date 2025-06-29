type MessageProps = {
  message: string;
  role: string;
};

const Message = ({ message, role }: MessageProps) => {
  return (
    <div
      className={`w-full flex items-center ${
        role === "user" ? "justify-end" : ""
      }`}
    >
      {/* {role != "user" ? (
        <div className="h-full w-[1px] bg-gray-700"></div>
      ) : null} */}
      <div
        className={`${
          role === "user"
            ? "bg-[#f0eee6] rounded-md  max-w-4/5"
            : "border-[#e9c2b5] border-l-2 ml-2 font-ovo"
        } p-2 m-1  w-fit`}
      >
        {message}
      </div>
      {/* {role == "user" ? <UserIcon size={"1.5rem"} /> : null} */}
    </div>
  );
};

export default Message;
