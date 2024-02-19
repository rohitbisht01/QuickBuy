import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

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
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    <FaCartArrowDown />
                    {"Cart"}
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                        {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                      </Badge>
                    )}
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    <FaUser />
                    {"Sign In"}
                  </div>
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
