import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { TiShoppingCart } from "react-icons/ti";
import logo from '../../imgs/logo.png';

import './styles.css';

export function Header() {
  return (
    <Navbar bg="transparent" data-bs-theme="dark" expand="lg" className='navbar'>
      <Container fluid className="container">
        <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            OpenHouse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 nav"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <NavDropdown  title="PRODUTO" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3">Novo produto</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Remover produto</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#action2">REGISTRAR</Nav.Link>
            <Nav.Link href="#action3">LOGIN</Nav.Link>
          </Nav>
          <a><TiShoppingCart size={30} /> </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}