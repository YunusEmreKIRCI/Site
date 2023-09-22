
import Container from 'react-bootstrap/Container';
import PerCard from "../components/PerCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IHA = () => {

  return (
    <div className="home">
     
       <Container>
            <Row className="justify-content-md-evenly" style={{marginTop: 150}}>
                <Col md="auto">
                    <PerCard />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col md="auto">
                    <PerCard />
                </Col>
                <Col md="auto">
                    <PerCard />
                </Col>
                <Col md="auto">
                    <PerCard />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard />
                </Col> 
                <Col  md="auto">
                    <PerCard />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard />
                </Col>
                <Col  md="auto">
                    <PerCard />
                </Col>
                <Col  md="auto">
                    <PerCard />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard />
                </Col>
                <Col  md="auto">
                    <PerCard />
                </Col>
                <Col  md="auto">
                    <PerCard />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard />
                </Col>
                <Col  md="auto">
                    <PerCard />
                </Col>
            </Row>
        </Container>
    </div>
  );
};      
export default IHA;