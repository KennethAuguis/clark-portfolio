import React, { useState } from "react";
import "./Contact.css";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    // Validation
    if (!name && !email && !message) {
      alert("Please enter your name, email, and message.");
      return;
    }
    if (!name && !email) {
      alert("Please enter your name and email.");
      return;
    }
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!message) {
      alert("Please enter your message.");
      return;
    }

    const newFormData = new FormData(event.target);
    newFormData.append("access_key", "76896d38-3439-4d14-9d9b-8a82433a1cda");

    const object = Object.fromEntries(newFormData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1 style={{ cursor: "default" }}>Contact Me</h1>
      </div>
      <div className="contact-session">
        <div className="contact-left">
          <h1 style={{ cursor: "default" }}>Let's Talk</h1>
          <p style={{ cursor: "default" }}>
            I'm currently available to take on new projects, so feel free to
            message me about anything you'd like me to work on. You can contact
            me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="" />{" "}
              <p style={{ cursor: "default" }}>kennethclarkga@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="" />{" "}
              <p style={{ cursor: "default" }}>+639166076566</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />{" "}
              <p style={{ cursor: "default" }}>
                Arayat, Pampanga, Philippines
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="contact-submit"
            disabled={!formData.name || !formData.email || !formData.message}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
