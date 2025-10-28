import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { Icons } from "./Icons";

const MyNavbar = ({ toggleSidebar }) => {
  const profileImage = "https://placehold.co/40x40/64748b/ffffff?text=U";

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top px-3 py-2">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left Section */}
        <div className="d-flex align-items-center">
          <Button
            variant="light"
            className="d-lg-none me-2"
            onClick={toggleSidebar}
          >
            <Icons.Menu />
          </Button>
          <div>
            <small className="text-muted d-none d-sm-block">Good Morning</small>
            <h5 className="m-0 fw-semibold">My Courses</h5>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <Form.Control
            type="text"
            placeholder="Search"
            className="d-none d-md-block w-50"
          />
          <Button
            variant="light"
            className="position-relative rounded-circle p-2"
          >
            <Icons.Bell />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
          </Button>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle border border-warning"
            width="40"
            height="40"
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
