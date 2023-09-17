import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LuShoppingBasket} from "react-icons/lu";
import logo from '../../imgs/logo.png';

export function Header() {
  return (
    <Navbar bg="transparent" data-bs-theme="light" expand="lg">
      <Container fluid>
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
            className="mx-auto my-2"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Produto" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Novo produto</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Remover produto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Cadastrar</Nav.Link>
            <Nav.Link href="#action3">Login</Nav.Link>
          </Nav>
          <a><LuShoppingBasket size={30} /> </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}