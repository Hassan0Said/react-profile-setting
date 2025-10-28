import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Icons } from "./Icons";

const CourseCard = ({ course }) => {
  const [showMenu, setShowMenu] = useState(false);
  const courseImage = `https://placehold.co/400x250/f0f0f0/333333?text=Course+${course.id}`;

  return (
    <Card className="shadow-sm border-0 rounded-3 overflow-hidden">
      <Card.Img variant="top" src={courseImage} alt={course.title} />
      <Card.Body>
        <small className="text-warning fw-bold">{course.category}</small>
        <Card.Title className="mt-2">{course.title}</Card.Title>

        <div className="d-flex justify-content-between text-muted small border-bottom pb-2 mb-2">
          <div className="d-flex align-items-center">
            {[...Array(5)].map((_, i) => (
              <Icons.Star
                key={i}
                className={`me-1 ${
                  i < Math.floor(course.rating) ? "text-warning" : "text-muted"
                }`}
                fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
              />
            ))}
            <span>{course.rating}</span>
          </div>
          <div className="d-flex align-items-center">
            <Icons.Users className="me-1" />
            <span>{course.students}</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-dark fw-bold">${course.price}</h5>
          <Dropdown show={showMenu} onToggle={() => setShowMenu(!showMenu)}>
            <Dropdown.Toggle
              as="button"
              className="btn btn-light border-0 rounded-circle"
            >
              <Icons.Dots />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>View Details</Dropdown.Item>
              <Dropdown.Item>Edit Course</Dropdown.Item>
              <Dropdown.Item className="text-danger">Delete Course</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
