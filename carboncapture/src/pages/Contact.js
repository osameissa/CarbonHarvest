// Contact.js
import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out to us using the form below or through our contact
        information.
      </p>

      {/* Contact Form (You can replace this with your own form component) */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Contact Information */}
      <div>
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>
    </div>
  );
}

export default Contact;
