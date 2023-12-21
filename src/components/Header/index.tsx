import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../imgs/logo.png';
import './styles.css';
import { Link } from 'react-router-dom';


interface HeaderProps{
  onOpenNewProductModal?: () => void;
  onOpenRemoveProductModal?: () => void;
}

export function Header({onOpenNewProductModal, onOpenRemoveProductModal}: HeaderProps) {
  
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
            className=" my-2 nav"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUTOS</Link>
            <NavDropdown title="PRODUTO" id="navbarScrollingDropdown">

              <NavDropdown.Item onClick={onOpenNewProductModal}>Novo produto</NavDropdown.Item>
              <NavDropdown.Item onClick={onOpenRemoveProductModal}>Remover produto</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}