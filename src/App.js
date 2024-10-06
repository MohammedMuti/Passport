import "./App.css";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import MidSection from "./Components/MidSection";
import LowerSection from "./Components/LowerSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Topbar />
        <Navbar />
        <MidSection />
        <LowerSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
