import React from "react";
import "./Contact.css";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "76896d38-3439-4d14-9d9b-8a82433a1cda");
    
        const object = Object.fromEntries(formData);
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
        }
      };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1 style={{ cursor: 'default' }}>Contact Me</h1>
            </div>
            <div className="contact-session">
                <div className="contact-left">
                    <h1 style={{ cursor: 'default' }}>Let's Talk</h1>
                    <p style={{ cursor: 'default' }}>I'm currently available to take on new projects, so feel free to message me about anything you'd like me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={email} alt="" /> <p style={{ cursor: 'default' }}>kennethclarkga@gmail.com</p>
                        </div>
                         <div className="contact-detail">
                         <img src={phone} alt="" /> <p style={{ cursor: 'default' }}>+639166076566</p>

                        </div>
                         <div className="contact-detail">
                         <img src={location} alt="" /> <p style={{ cursor: 'default' }}>Arayat, Pampanga, Philippines</p>

                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter your email" name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;