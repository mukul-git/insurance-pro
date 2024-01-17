// LoginForm.js
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
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
// import "../firebaseConfig"; // Add this line prevent firebase not loading error
// import { getFirestore, addDoc, collection } from "firebase/firestore";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const LoginForm = () => {
  // const db = getFirestore();
  const submitForSignin = async (values, { setSubmitting }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCred) => {
        console.log(userCred.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
    setSubmitting(false);
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={submitForSignin}
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
                  Login
                </Button>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
