import { useState } from "react";
import { data } from "../data.json";

export const Contacts = () => {
  const email = data.contacts.data.email;
  const [spanClasses, setSpanClasses] = useState("tooltip");

  const handleClick = () => {
    copy();
    setSpanClasses("tooltip active");
    setTimeout(() => {
      setSpanClasses("tooltip");
    }, 1000);
  };
  const copy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section id="contacts" className="section contacts">
      <div className="contacts__content">
        <div className="contacts__title">{data.contacts.title}</div>
        <div className="contacts__data">
          <a
            href={`tel:${data.contacts.data.phonenumber}`}
            className="contacts__data--phonenumber"
          >
            {data.contacts.data.phonenumber}
          </a>
          <p onClick={handleClick} className="contacts__data--email">
            {email}
            <span className={spanClasses}>{data.contacts.tooltip}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
