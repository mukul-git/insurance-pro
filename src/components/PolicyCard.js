import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataError,
} from "../redux/slice";
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
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const response = await fetch("http://localhost:3001/policies");
        const result = await response.json();

        dispatch(fetchDataSuccess(result));
      } catch (error) {
        dispatch(fetchDataError(error));
      }
    };
    fetchData();
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
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
      {data?.type?.map((policyType, policyIndex) => {
        return (
          <Row key={policyIndex} className="justify-content-center">
            {policyType.health &&
              policyType.health.length > 0 &&
              policyType?.health?.map((elem, index) => {
                return (
                  <Col key={index} xs="12" sm="6" md="3" className="mb-4">
                    <Card
                      color="light"
                      style={{
                        width: "18rem",
                      }}
                    >
                      <img alt="Sample" src="https://picsum.photos/300/200" />
                      <CardBody>
                        <CardTitle tag="h5">{elem.title}</CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        ></CardSubtitle>
                        <CardText>{elem.description}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            {policyType.life &&
              policyType.life.length > 0 &&
              policyType?.life?.map((elem, index) => {
                return (
                  <Col key={index} xs="12" sm="6" md="3" className="mb-4">
                    <Card
                      color="light"
                      style={{
                        width: "18rem",
                      }}
                    >
                      <img alt="Sample" src="https://picsum.photos/300/200" />
                      <CardBody>
                        <CardTitle tag="h5">{elem.title}</CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        ></CardSubtitle>
                        <CardText>{elem.description}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            {policyType.property &&
              policyType.property.length > 0 &&
              policyType?.property?.map((elem, index) => {
                return (
                  <Col key={index} xs="12" sm="6" md="3" className="mb-4">
                    <Card
                      color="light"
                      style={{
                        width: "18rem",
                      }}
                    >
                      <img alt="Sample" src="https://picsum.photos/300/200" />
                      <CardBody>
                        <CardTitle tag="h5">{elem.title}</CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        ></CardSubtitle>
                        <CardText>{elem.description}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        );
      })}
    </div>
  );
};

export default PolicyCard;
