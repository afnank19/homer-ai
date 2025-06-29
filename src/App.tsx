import { SnowflakeIcon, WarningIcon } from "@phosphor-icons/react";
import "./index.css";
import WritingPage from "./pages/writing-page";

function App() {
  return (
    <>
      <div className="lg:block hidden">
        <WritingPage />
      </div>
      <div className="absolute left-3 bottom-4 bg-orange-100 p-1 px-2 rounded-2xl border border-yellow-400 flex items-center gap-1 text-yellow-800">
        <WarningIcon />
        Feature Showcase
      </div>
      <div className="lg:hidden h-screen flex flex-col items-center justify-center max m-2 gap-4">
        <SnowflakeIcon size={"2.5rem"} color="#c96442" />
        <p className="text-xl font- text-center">
          Homer* [AI] is intended for use on a desktop.<br></br>
          Switch to a bigger screen and comeback.
        </p>
      </div>
    </>
  );
}

export default App;
