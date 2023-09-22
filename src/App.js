import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import PITEK from "./pages/PITEK";
import KOK from "./pages/KOK";
import Home from "./pages/Home";
import CS from "./pages/CS";
import EA from "./pages/EA";
import PES from "./pages/PES";
import AESS from "./pages/AESS";
import WIE from "./pages/WIE";
import IHA from "./pages/IHA";
import SUALTI from "./pages/SUALTI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import SliderBigp1 from "./images/21.png";
import SliderBigp2 from "./images/16.png";
import SliderBigp3 from "./images/BurcuEsmersoy.jpg";
import Deney from "./images/Deney5.jpg";
import SliderBig from "./components/SliderBig";

function App() {
  const SliderBigPhotoList = [
    {key : 1 , value : SliderBigp1},
    {key : 2 , value : SliderBigp2},
    {key : 3 , value : SliderBigp3},
    {key : 4 , value : Deney},
  ]
  return (
    
    <div>
      <Navbar />
      <SliderBig photos = {SliderBigPhotoList}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PITEK" element={<PITEK />} />
          <Route path="/KOK" element={<KOK />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CS" element={<CS />} />
          <Route path="/EA" element={<EA />} />
          <Route path="/PES" element={<PES />} />
          <Route path="/AESS" element={<AESS />} />
          <Route path="/WIE" element={<WIE />} />
          <Route path="/IHA" element={<IHA />} />
          <Route path="/SUALTI" element={<SUALTI />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>      
      <Footer />
    </div>
  );
}
export default App;
