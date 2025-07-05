const InputBox = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="m-1">
        Talk to your writing through Homer's Chat Assistant. Ask it to add a
        conclusion, or turn a paragraph into bullets!
      </p>
      <div className="object-cover">
        <img
          src="/input-box.png"
          className="border rounded-md border-gray-300"
        ></img>
      </div>
    </div>
  );
};

export default InputBox;
