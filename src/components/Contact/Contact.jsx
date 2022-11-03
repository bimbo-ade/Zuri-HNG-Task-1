import React from "react";
import "./Contact.style";
import { ImCheckboxUnchecked } from "react-icons/im";
import { Div } from "./Contact.style";
const Contact = () => {
  return (
    <>
      <Div>
        <div className="contact-header">
          {" "}
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className="form">
          <div className="username">
            <div className="first-name">
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your Last name" />
            </div>
          </div>

          <div className="email">
            <label>Email</label>
            <input type="email" placeholder="yourname@gmail.com" />
          </div>
          <div className="message">
            <label>Message</label>
            <textarea
              type="text"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>
        </div>
        <div className="check">
          <ImCheckboxUnchecked />
          <p>
            You agree to providing your data to damisayrah_ who may contact you.
          </p>
        </div>
        <button>Send Message</button>
      </Div>
    </>
  );
};

export default Contact;
