// Contact.js
import React from "react";
import Navbar from "../components/Navbar.js";

function Contact() {
  return (
    <div class="contactPage">
      <Navbar />
      <div class="container">
        <h1>Contact Us 📞 </h1>
        <div>
          <h3>Email: contact@example.com</h3>
          <h3>Phone: (123) 456-7890</h3>
          <h3>Address: 123 Street, 123 45</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
