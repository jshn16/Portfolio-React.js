import React from "react";
import emailLogo from '../../assets/Email Marketing Illustration.png'
function Contact() {
    return (
        <div className="box">
            <h1 className="bold">Contact</h1>
            <hr />
            <div className="contact-box">
                <div className="emailImageBox">
                    <img src={emailLogo}></img>
                </div>
                <div className="contactForm">
                    <div id="formContainer">
                        <h2>Contact Us</h2>
                        <hr />
                        <form className="" action="" id="contactForm">
                            <div className="item" id="item-1">
                                <label id="fName">First Name</label>
                                <input type="text" name="fName" id="fName" placeholder="First Name" required />
                            </div>

                            <div className="item" id="item-2">
                                <label id="lName">Last Name</label>
                                <input type="text" name="lName" id="lName" placeholder="Last Name" required />
                            </div>

                            <div className="item" id="item-3">
                                <label id="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" required />
                            </div>

                            <div className="item" id="item-4">
                                <label id="phone">Phone</label>
                                <input type="number" name="phone" id="phone" placeholder="Phone Number" required />
                            </div>

                            <div className="item" id="item-5">
                                <label for="textarea">Message</label>
                                <textarea id="textarea" name="textarea" required ></textarea>
                            </div>

                            <div className="item" id="item-6">
                                <button className="btn-common " type="submit">Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Contact;