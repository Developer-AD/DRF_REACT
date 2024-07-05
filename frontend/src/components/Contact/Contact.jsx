import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="form-design-contact">
      <div className="form-box-contact">
        <h2>Contact Us</h2>
        <form method="post">
          <div className="input-box-contact">
            <input
              type="text"
              maxlength="30"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-box-contact">
            <input
              type="email"
              maxlength="30"
              placeholder="Email ID"
              required
            />
          </div>

          <div className="input-box-contact">
            <input
              type="number"
              min="0"
              maxlength="10"
              placeholder="Mobile Number"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              required
            />
          </div>

          <div className="textarea-contact">
            <textarea
              name=""
              id=""
              cols="25"
              rows="5"
              maxlength="350"
              placeholder="Write you query here?"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
