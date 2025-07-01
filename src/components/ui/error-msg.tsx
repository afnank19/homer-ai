import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";

type ErrorMsgProps = {
  retryFunc: (retry: Boolean) => Promise<void>;
};

const ErrorMsg = ({ retryFunc }: ErrorMsgProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-1 items-center bg-red-100 rounded-md w-fit p-2 border border-red-500">
        <p className="text-red-700 border-r pr-2">Oops! An error occured</p>
        <button
          className="flex hover:bg-red-200 p-1 rounded"
          onClick={() => {
            retryFunc(true);
          }}
        >
          <ArrowCounterClockwiseIcon size={"1.2rem"} className="text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default ErrorMsg;
