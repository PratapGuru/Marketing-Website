import React from "react";
import "./Homepage";

function ContactUs() {
  return (
    <div>
      <div className="contact">
        <h1>Enter Your Details</h1>
        <div className="form">
          <form action="submit">
            <label htmlFor="full_name">Enter Your Full Name: </label>
            <input type="text" placeholder="Full Name" className="name" />

            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="Email" />

            <label htmlFor="mobile">Mobile: </label>
            <input type="number" placeholder="Mobile" />

            <label htmlFor="address">Address: </label>
            <input type="text" placeholder="Address" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
