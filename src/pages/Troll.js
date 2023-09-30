import React from "react";
import Slider from "../components/Slider";
import Troll1 from "../images/trol/1.jpg";
import Troll2 from "../images/trol/2.jpg";
import Troll3 from "../images/trol/3.jpg";
import Troll4 from "../images/trol/4.jpg";
import Troll5 from "../images/trol/5.jpg";
import Troll6 from "../images/trol/6.jpg";
import Troll7 from "../images/trol/7.jpg";
import Troll8 from "../images/trol/8.jpg";
import Troll9 from "../images/trol/9.jpg";
import Troll10 from "../images/trol/10.jpg";
import Troll11 from "../images/trol/11.jpg";
import Troll12 from "../images/trol/12.jpg";
import Troll13 from "../images/trol/13.jpg";
import Troll14 from "../images/trol/14.jpg";
import Troll15 from "../images/trol/15.jpg";
import Troll16 from "../images/trol/16.jpg";
import Troll17 from "../images/trol/17.jpg";
import Troll18 from "../images/trol/18.jpg";
import Troll19 from "../images/trol/19.jpg";
import Troll21 from "../images/trol/21.jpg";
import Troll22 from "../images/trol/22.jpg";
import Troll23 from "../images/trol/23.jpg";
import Troll24 from "../images/trol/24.jpg";
import Troll25 from "../images/trol/25.jpg";
import Troll26 from "../images/trol/26.jpg";
import Troll27 from "../images/trol/27.jpg";
import Troll28 from "../images/trol/28.jpg";
import Troll29 from "../images/trol/29.jpg";
import Troll30 from "../images/trol/30.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Troll = () => {
   
  const images = [
        {key: 1, value: Troll1},
        {key: 2, value: Troll2},
        {key: 3, value: Troll3},
        {key: 4, value: Troll4},
        {key: 5, value: Troll5},
        {key: 6, value: Troll6},
        {key: 7, value: Troll7},
        {key: 8, value: Troll8},
        {key: 9, value: Troll9},
        {key: 10, value: Troll10},
        {key: 11, value: Troll11},
        {key: 12, value: Troll12},
        {key: 13, value: Troll13},
        {key: 14, value: Troll14},
        {key: 15, value: Troll15},
        {key: 16, value: Troll16},
        {key: 17, value: Troll17},
        {key: 18, value: Troll18},
        {key: 19, value: Troll19},
        {key: 20, value: Troll21},
        {key: 21, value: Troll22},
        {key: 22, value: Troll23},
        {key: 23, value: Troll24},
        {key: 24, value: Troll25},
        {key: 25, value: Troll26},
        {key: 26, value: Troll27},
        {key: 27, value: Troll28},
        {key: 28, value: Troll29},
        {key: 29, value: Troll30},
  ];



  return (
    <div >
     <Container >
          <Row className="justify-content-center align-items-center">
            <Col  className = "justify-content-center align-items-center" lg={11}>
                  {/*Ana etkinlik sliderı bu şekilde tanımlanacak sadece yukarda fotoğrafları tanımlicaksınız*/}
            <Slider photos = {images}/>

            </Col>
          </Row>
        </Container>
    </div>
  );
};      
export default Troll;