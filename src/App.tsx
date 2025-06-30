import "./index.css";
import WritingPage from "./pages/writing-page";
import WarningBanner from "./components/ui/warning-banner";
import MobileFallback from "./pages/mobile-fallback";

function App() {
  return (
    <>
      <div className="lg:block hidden">
        <WritingPage />
      </div>
      <WarningBanner />
      <MobileFallback />
    </>
  );
}

export default App;
