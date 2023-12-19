// Contact.js
import React from "react";
import Navbar from "../components/Navbar.js";
import Cc from "../components/Cc.js";

function Contact() {
  return (
    <div class="contactPage">
      <Navbar />
      <div class="container">
        <h1>Contact Us 📞 </h1>
        <div>
          <h3>
            <strong>Phone:</strong> (123) 456-7890
          </h3>
          <h3>
            <strong>Email:</strong> contact@carbon.capture
          </h3>
          <h3>
            <strong>Address:</strong> 123 Street, City, Country
          </h3>
        </div>
      </div>
      <Cc />
    </div>
  );
}

export default Contact;
