import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './navimg.png';

function Navbars() {
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="Home"> IEEE
          {/* <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="WhoWeAre">Who we are </Nav.Link>
            <NavDropdown title="Societies" id="collapsible-nav-dropdown">
              
              <NavDropdown.Item href="CS">
                CS
              </NavDropdown.Item>
              <NavDropdown.Item href="AESS">
                AESS
              </NavDropdown.Item>
              <NavDropdown.Item href="PES">
                PES
              </NavDropdown.Item>
              <NavDropdown.Item href="EA">
                EA
              </NavDropdown.Item>
              <NavDropdown.Item href="WIE">
                WIE
              </NavDropdown.Item>
              <NavDropdown.Item href="KOK">
                KÖK  
              </NavDropdown.Item>
              <NavDropdown.Item href="PITEK">
                PİTEK
              </NavDropdown.Item>
                            
            </NavDropdown>
          
            <Nav.Link href="Turing">Tecnical Teams </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;