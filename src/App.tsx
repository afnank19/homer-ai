import "./index.css";
import WritingPage from "./pages/writing-page";
import WarningBanner from "./components/ui/warning-banner";
import MobileFallback from "./pages/mobile-fallback";
import ApiKeyBanner from "./components/ui/api-key-banner";

function App() {
  return (
    <>
      <div className="lg:block hidden">
        <WritingPage />
      </div>
      <ApiKeyBanner />
      <WarningBanner />
      <MobileFallback />
    </>
  );
}

export default App;
