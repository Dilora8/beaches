import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter } from "react-router-dom";
import Info from "./Info/Info";
import Discover from "./Discover/Discover";
import Place from "./Place/Place";
import Enjoy from "./Enjoy/Enjoy";
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <div className="container mx-auto">
        <Info />
        <Discover />
        <Place />
        <Enjoy />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
