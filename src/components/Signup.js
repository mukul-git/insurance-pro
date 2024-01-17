import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";
import Header from "./Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const initialValues = {
  email: "",
  password: "",
};

const submitForSignup = async (values, { setSubmitting }) => {
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCred) => {
      console.log(userCred.user.email);
    })
    .catch((err) => {
      console.log(err);
    });
  setSubmitting(false);
};

const SignUp = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <Formik
              initialValues={initialValues}
              // validate={validate}
              onSubmit={submitForSignup}
            >
              <Form>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Email:</BootstrapForm.Label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Password:</BootstrapForm.Label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <Button type="submit" variant="primary">
                  SignUP
                </Button>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SignUp;
