// Contact.js
import React from "react";
import Navbar from "../components/Navbar.js";

function Contact() {
  return (
    <div class="contactPage">
      <Navbar />
      <div class="contactContainer">
        <h1>Contact Us 📞 </h1>
        <div>
          <h2 class="contact-underline">Contact Information</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, Cityville, State, 12345</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
