
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PerCard from "../components/PerCard";

const SUALTI = () => {
 
  return (
    <div>
        
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
export default SUALTI;