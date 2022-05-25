import { useState } from "react";
import bgImage from "../assets/accountant.png";
const {
  data: { message },
} = require("../data.json");

export const Message = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section id="main" className="section message">
      <img src={bgImage} alt="accountant" className="message__image" />
      <h1 className="message__title">
        {message.title}
        <span>{message.subtitle}</span>
      </h1>

      <div className="message__contact">
        <p className="message__contact--title">{message.contact.title}</p>

        <form method="POST" name="contactme" className="message__contact--form">
          <input type="hidden" name="form-name" value="contactme" />
          <input
            className="message__contact--form-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <button
            disabled={!email.length}
            type="submit"
            className="message__contact--form-btn"
          >
            {message.contact.button}
          </button>
        </form>
      </div>
    </section>
  );
};
