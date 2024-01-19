import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const PolicyCard = () => {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/policies");
      const dataJson = await data.json();
      setPolicies(dataJson);
    };
    fetchData();
  }, [policies]);
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          width: "100%", // Full width on small screens
          height: "200px", // Fixed height for illustration (you can adjust as needed)
          fontSize: "20vh",
        }}
      >
        Featured Policies
      </div>
      <Row className="justify-content-center">
        {policies?.type[0]?.health?.map((elem, index) => {
          return (
            <Col xs="12" sm="6" md="3" className="mb-4">
              <Card
                color="light"
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">{elem.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {/* Card subtitle */}
                  </CardSubtitle>
                  <CardText>{elem.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-center">
        {policies?.type[1]?.life?.map((elem, index) => {
          return (
            <Col xs="12" sm="6" md="3" className="mb-4">
              <Card
                color="light"
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">{elem.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {/* Card subtitle */}
                  </CardSubtitle>
                  <CardText>{elem.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-center">
        {policies?.type[2]?.property?.map((elem, index) => {
          return (
            <Col xs="12" sm="6" md="3" className="mb-4">
              <Card
                color="light"
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">{elem.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {/* Card subtitle */}
                  </CardSubtitle>
                  <CardText>{elem.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PolicyCard;
