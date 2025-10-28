import React from "react";
import { Icons } from "./Icons";
import { Nav } from "react-bootstrap";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: "Dashboard", icon: Icons.Dashboard },
    { name: "Create New Course", icon: Icons.PlusCircle },
    { name: "My Courses", icon: Icons.Layers, active: true },
    { name: "Earning", icon: Icons.CreditCard },
    { name: "Settings", icon: Icons.Settings },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark bg-opacity-50 d-lg-none"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`position-fixed bg-dark text-light h-100 p-3 transition ${
          isOpen ? "end-0" : "translate-middle-x d-none d-lg-block"
        }`}
        style={{ width: "250px", zIndex: 1040 }}
      >
        <div className="d-flex align-items-center mb-4">
          <Icons.GraduationCap className="text-warning me-2" />
          <h5 className="m-0">E-tutor</h5>
        </div>

        <Nav className="flex-column">
          {navItems.map((item) => (
            <Nav.Link
              key={item.name}
              href="#"
              className={`text-light d-flex align-items-center p-2 rounded mb-2 ${
                item.active ? "bg-warning text-dark" : "hover-bg-secondary"
              }`}
              onClick={toggleSidebar}
            >
              <item.icon className="me-2" />
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
