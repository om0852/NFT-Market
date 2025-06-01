import React, { useState } from "react";
import Style from "./Contact.module.css";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={Style.contact_section}>
      <div className={Style.contact_container}>
        <div className={Style.contact_info}>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Fill out the form or reach us via the info below.</p>
          <div className={Style.contact_details}>
            <div>
              <strong>Email:</strong> <a href="mailto:support@nftmarketplace.com">support@nftmarketplace.com</a>
            </div>
            <div>
              <strong>Address:</strong> 123 NFT Street, Web3 City, Metaverse
            </div>
          </div>
          <div className={Style.contact_socials}>
            <a href="#"><TiSocialFacebook /></a>
            <a href="#"><TiSocialInstagram /></a>
            <a href="#"><TiSocialLinkedin /></a>
            <a href="#"><TiSocialTwitter /></a>
            <a href="#"><TiSocialYoutube /></a>
          </div>
        </div>
        <form className={Style.contact_form} onSubmit={handleSubmit} autoComplete="off">
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={Style.contact_btn}>Send Message</button>
          {submitted && <div className={Style.contact_success}>Thank you! We'll get back to you soon.</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact; 