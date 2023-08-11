import React, { useRef } from "react";
import emailjs, { init } from "emailjs-com";
import { Form, Toast, ToastContainer } from "react-bootstrap";
import PrimaryButton from "../buttons/primaryButton";
import "./contactForm.scss";
import { useState, useReducer } from "react";
import { useMobile } from "../../hooks/useMobile";
import { toastReducer } from "../../reducers/toastReducer";

init(process.env.GATSBY_USER_ID);

export const ContactForm = () => {
  const form = useRef();
  // const [showResultToast, setShowResultToast] = useState(false);
  // const [isResultSuccess, setIsResultSuccess] = useState(false);

  const [toast, dispatchToast] = useReducer(toastReducer, {
    showResultToast: false,
    isResultSuccess: false,
  });
  const isMobile = useMobile();
  const isBrowser = typeof window !== "undefined";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        form.current,
        process.env.GATSBY_USER_ID
      )
      .then(
        (result) => {
          // success
          console.log(result.text);
          e.target.reset(); // reset form after successfully sending the email
          // setShowResultToast(true);
          // setIsResultSuccess(true);
          dispatchToast({ type: "TOAST_SUCCESS" });
        },
        (error) => {
          // error
          console.log(error.text);
          // setShowResultToast(true);
          // setIsResultSuccess(false);
          dispatchToast({ type: "TOAST_ERROR" });
        }
      );
  };

  const resultToast = () => {
    return (
      <ToastContainer
        style={{ top: isMobile || !isBrowser ? 0 : window.scrollY }}
      >
        <Toast
          onClose={() => dispatchToast({ type: "TOAST_CLOSE" })}
          show={toast.showResultToast}
          delay={3000}
          autohide
          // bg={isResultSuccess ? "success" : "Danger"}
          bg={toast.isResultSuccess ? "success" : "Danger"}
        >
          <Toast.Body>
            {toast.isResultSuccess
              ? `Woohoo, You message has been sent to Zhentian!`
              : "Sorry, something went wrong. Please Try again!"}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    );
  };

  return (
    <>
      {resultToast()}
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="user_name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            name="user_email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Message"
            name="message"
            required
          />
        </Form.Group>
        <PrimaryButton type="submit">Send</PrimaryButton>
      </Form>
    </>
  );
};
