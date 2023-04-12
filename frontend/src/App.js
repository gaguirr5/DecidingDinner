import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Link} from "react-router-dom";
import AppRouter from './Routes/routes';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
    return (
    <div className="App">
        <main>
          <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/selector">Deciding Dinner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Users" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/findUsers">Find</NavDropdown.Item>
                      <NavDropdown.Item href="/createUser">
                        Create
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/updateUser">Update</NavDropdown.Item>
                      <NavDropdown.Divider />
                      {/* <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <AppRouter />
        </main>
    </div>
  );
}

export default App;