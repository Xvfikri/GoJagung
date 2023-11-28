// import { useState, useEffect } from "react"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"



const NavbarComponent = () => {
  // const [changeColor, setChangeColor] = useState(false);



  return (
    <div>
      <Navbar expand="lg" >
      <Container className="contain">
        <Navbar.Brand href="#home"><img src="/Gojagung.svg" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center">
                <Nav.Link href="#home">Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown title="Layanan" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/layanan">Market</NavDropdown.Item>
                  <NavDropdown.Item href="/mediapartner">
                    Media Partner
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">Artikel</NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Artikel
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <div className="20px">
                <Nav.Link href="#home">Login</Nav.Link>
                </div> */}
              </Nav>

            <div className="log text-center">
              <a href="#">Login</a>
              <button>Daftar</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent