import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useMobile from "../../hooks/useMobile";
import "./navbarComponent.scss";

// export default function Navbar() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="/">
//         Aditya Chopra
//       </a>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="/navbarTogglerDemo01"
//         aria-controls="navbarTogglerDemo01"
//         aria-expanded={!isNavCollapsed ? true : false}
//         aria-label="Toggle navigation"
//         onClick={handleNavCollapse}
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div
//         className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
//         id="navbarTogglerDemo01"
//       >
//         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//           <li className="navbar-nav-item nav-item active">
//             <a href="#home" className="navbar-nav-link nav-link">
//               HOME
//             </a>
//           </li>
//           <li className="navbar-nav-item nav-item">
//             <a href="#about" className="navbar-nav-link nav-link">
//               ABOUT
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default function NavbarComponent() {
  const isMobile = useMobile();
  return (
    <Navbar expand="md" className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand
          href="#home"
          className={`navbar-brand ${isMobile ? "" : "mx-auto"}`}
        >
          Zhentian
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav">
          <Nav>
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
