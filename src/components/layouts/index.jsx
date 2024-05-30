import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
const Header = () => {
  const history = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <div className="logo" style={{ paddingLeft: 15, cursor: "pointer" }}>
        <img
          src="/logo192.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          onClick={() => {
            history("/");
          }}
        />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ paddingLeft: 12}}>
          <Button variant="primary">
            <Nav.Link as={Link} to="/home" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Button>
          <Dropdown as={ButtonGroup}>
            <Button variant="primary">
              <Nav.Link as={Link} to="/genre" style={{ color: "white" }}>
                Genre
              </Nav.Link>
            </Button>
            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu >
              <Dropdown.Item>
                <Nav.Link as={Link} to="/action" style={{ color: "white" }}>
                  Action
                </Nav.Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Nav.Link as={Link} to="/drama" style={{ color: "white" }}>
                  Drama
                </Nav.Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Nav.Link as={Link} to="/horror" style={{ color: "white" }}>
                  Horror
                </Nav.Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary">
            <Nav.Link as={Link} to="/top" style={{ color: "white" }}>
              TopRated
            </Nav.Link>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;

