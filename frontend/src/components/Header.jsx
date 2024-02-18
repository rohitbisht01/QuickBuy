import { Container, Nav, Navbar } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const IconComponent = ({ Icon, label }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <Icon />
      {label}
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>QuickBuy</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  <IconComponent Icon={FaCartArrowDown} label={"Cart"} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link>
                  <IconComponent Icon={FaUser} label={"Sign In"} />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
