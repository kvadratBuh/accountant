import { data } from "../data.json";

export const Contacts = () => {
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
          <p className="contacts__data--email">{data.contacts.data.email}</p>
        </div>
      </div>
    </section>
  );
};
