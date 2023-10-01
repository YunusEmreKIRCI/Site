import React from "react";
import Video from "../images/trol/Selam1.mp4";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Troll = () => {

  return (
    <div>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col className = "justify-content-center align-items-center" lg={11}>
                      {/*diğer etkinlikler fotoğrafları verilecek*/}

            <video src={Video} autoPlay loop/> 

            </Col>
          </Row>
        </Container>

    
    </div>
  );
};      
export default Troll;