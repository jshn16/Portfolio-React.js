import React, { useEffect } from "react";
import { useRef } from "react";
import emailLogo from "../../assets/Email Marketing Illustration.png";
import emailjs from "@emailjs/browser";

function Contact() {

  useEffect(() => {
    document.title = 'Contact'
}, [])

  const emailForm:any = useRef();

  //using emailjs to recieve email.
  function sendEmail(event:any) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7tb9985",
        "template_pu9dbep",
        emailForm.current,
        "3uf4VhXhu3kfm6FF7"
      )
      .then(
        (result) => {
          alert("Email Sent!");
          emailForm.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (


    <div className="box">
      <h1 className="bold">Contact</h1>
      <hr />
      <div className="contact-box">
        <div className="emailImageBox">
          <img title="Contact Me" alt="emailLogo" src={emailLogo}></img>
        </div>
        <div className="contactForm">
          <div id="formContainer">
            <h2>Contact Me</h2>
            <hr />
            <form
              ref={emailForm}
              className="form"
              action=""
              onSubmit={sendEmail}
            >
              <div className="item" id="item-1">
                <label >Name</label>
                <input
                  type="text"
                  name="user_name"
                 
                  placeholder="Name"
                  required
                />
              </div>

              {/* <div className="item" id="item-2">
                                <label id="lName">Last Name</label>
                                <input type="text" name="lName" id="lName" placeholder="Last Name"  />
                            </div> */}

              <div className="item" id="item-3">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                
                  placeholder="Email"
                  required
                />
              </div>

              {/* <div className="item" id="item-4">
                                <label id="phone">Phone</label>
                                <input type="number" name="phone" id="phone" placeholder="Phone Number"  />
                            </div> */}

              <div className="item" id="item-5">
                <label htmlFor="textarea">Message</label>
                <textarea
                 
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="item" id="item-6">
                <button className="btn-common " type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
