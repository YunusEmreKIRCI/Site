import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './navimg.png';
import {IoEllipsisVerticalOutline} from 'react-icons/io5';

function Navbars() {
  return (
    <Navbar  collapseOnSelect expand="lg" style={{ backgroundColor: '#055c9d' }}>
      <Container>
        <Navbar.Brand href="Home" style = {{color : "white"}}>
           <img
            alt=""
            src={Logo}
            width="417"
            height="51"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <IoEllipsisVerticalOutline size = "30" style={{color : "white"}}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home" style = {{color : "white"}}>Home</Nav.Link>
            <Nav.Link href="WhoWeAre" style = {{color : "white"}}>Who we are </Nav.Link>
            <NavDropdown style = {{color : "white"}} title="Societies" id="collapsible-nav-dropdown" >
              
              <NavDropdown.Item href="CS">
                CS
              </NavDropdown.Item>
              <NavDropdown.Item href="AESS">
                AESS
              </NavDropdown.Item>
              <NavDropdown.Item href="PES">
                PES
              </NavDropdown.Item>
              <NavDropdown.Item href="EA" >
                EA
              </NavDropdown.Item>
              <NavDropdown.Item href="WIE" >
                WIE
              </NavDropdown.Item>
              <NavDropdown.Item href="KOK" >
                KÖK  
              </NavDropdown.Item>
              <NavDropdown.Item href="PITEK">
                PİTEK
              </NavDropdown.Item>
                            
            </NavDropdown>
          
            <Nav.Link href="Turing" style = {{color : "white"}}>Tecnical Teams </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;