const DiffPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="m-1">
        Accept or Reject changes Homer makes. Sending another message auto
        confirms last change.
      </p>
      <div className="object-cover">
        <img
          src="/diff.png"
          className="border rounded-md border-gray-300"
        ></img>
      </div>
    </div>
  );
};

export default DiffPage;
