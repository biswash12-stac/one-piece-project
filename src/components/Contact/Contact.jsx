import React, { useState } from "react"; 
import "./Contact.css";
import msgicon from "../../assets/msg-icon.png";
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import whitearrow from "../../assets/whitearrow.png";

const Contact = () => {
    const [result, setResult] = useState(""); 

    const onSubmit = async (event) => {
        event.preventDefault(); 
        setResult('Sending...');
        
        const formData = new FormData(event.target); 
        formData.append("access_key", "03b409c9-f689-442e-8af9-2edba2e79eaa");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log('Success', res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send Us a Message <img src={msgicon} alt="" />
                </h3>
                <p>
                    Feel free to reach out through the contact form or find our contact
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional service to our
                    University community.
                </p>

                <ul>
                    <li>
                        <img src={mailicon} alt="" /> mainlaibiswas757@gmail.com
                    </li>
                    <li>
                        <img src={phoneicon} alt="" /> 9847774304
                    </li>
                    <li>
                        <img src={locationicon} alt="" /> Sarlahi
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                    />
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        required
                    />
                    <label>Write Your Message Here</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Enter Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit Here <img src={whitearrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
