const TabComplete = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="m-1">
        Typing Something? Press [Tab] to generate a suggested line, and [Tab]
        again to insert!
      </p>
      <div className="">
        <img
          src="/tab-complete.png"
          className="border rounded-md border-gray-300"
        ></img>
      </div>
    </div>
  );
};

export default TabComplete;
