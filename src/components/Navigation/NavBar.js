import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

 export default function NavBar() {
    const location = useLocation();
     const menu = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        // {name: "Artists", link: "/artists"},
        {name: "Categories", link: "/categories"},  //Coming Soon.. will have active links to categories
        {name: "Songs", link: "/songs"}, 
     ]


    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-5">
          <Container>
          {location.pathname !== '/' ? <Navbar.Brand as={Link} to="/">
          Remixed Lyrics
        </Navbar.Brand> : 
        <Navbar.Brand>
          {" "} 
        </Navbar.Brand>}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
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