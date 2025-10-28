import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Icons } from "./Icons";
import CourseCard from "./CourseCard";

const courses = [
  { id: 1, title: "Premiere Pro CC for Beginners", category: "VIDEO", rating: 4.9, students: "882,941", price: "24.00" },
  { id: 2, title: "Learn Python Programming", category: "DEVELOPMENT", rating: 4.0, students: "511,123", price: "49.00" },
  { id: 3, title: "Data Structures & Algorithms", category: "CS", rating: 5.0, students: "197,637", price: "23.00" },
  { id: 4, title: "Deep Learning A-Z", category: "AI", rating: 4.7, students: "211,434", price: "89.00" },
];

const MainContent = () => {
  return (
    <Container fluid className="bg-light py-4 min-vh-100">
      <Container>
        {/* Search and Sort */}
        <div className="bg-white rounded-3 p-3 mb-4 shadow-sm d-flex flex-column flex-md-row justify-content-between">
          <Form.Control
            type="text"
            placeholder="Search courses..."
            className="mb-3 mb-md-0 w-100 w-md-50"
          />
          <Form.Select className="w-25">
            <option>Latest</option>
            <option>Most Popular</option>
            <option>Price Low to High</option>
          </Form.Select>
        </div>

        {/* Courses Grid */}
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {courses.map((course) => (
            <Col key={course.id}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default MainContent;
