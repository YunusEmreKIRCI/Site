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
import Troll from "./pages/Troll";
import Turing from "./pages/Turing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import SliderBigp1 from "./images/karışık en üst etkinlikler/4.png";
import SliderBigp4 from "./images/karışık en üst etkinlikler/6.png";
import SliderBigp5 from "./images/karışık en üst etkinlikler/7.png";
import SliderBigp6 from "./images/karışık en üst etkinlikler/8.png";
import SliderBig from "./components/SliderBig";

function App() {
  const SliderBigPhotoList = [
    {key : 1 , value : SliderBigp1},
    {key : 4 , value : SliderBigp4},
    {key : 5 , value : SliderBigp5},
    {key : 6 , value : SliderBigp6},
  ]
  return (
    
    <div style={{backgroundColor : " #141416", color :"white"}}>
      <Navbar />
      <SliderBig photos = {SliderBigPhotoList}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Troll" element={<Troll />} />
          <Route path="/PITEK" element={<PITEK />} />
          <Route path="/KOK" element={<KOK />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CS" element={<CS />} />
          <Route path="/EA" element={<EA />} />
          <Route path="/PES" element={<PES />} />
          <Route path="/AESS" element={<AESS />} />
          <Route path="/WIE" element={<WIE />} />
          <Route path="/Turing" element={<Turing />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>      
      <Footer />
    </div>
  );
}
export default App;
