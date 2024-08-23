import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

 export default function NavBar() {
     const menu = [
        {name: "Home", link: "/"},
        {name: "Artists", link: "/artists"},
        {name: "Songs", link: "/songs"}, 
        {name: "Categories", link: "/categories"},
        {name: "About", link: "/about"},
     ]


    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-5">
          <Container>
            <Navbar.Brand href="#home">Remixed Lyrics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {
                    menu.map((item, index) => {
                        return (
                            <Nav.Link as={Link} to={item.link}>{item.name}</Nav.Link>
                        )
                })
            }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}