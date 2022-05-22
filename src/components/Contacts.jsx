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
          <form
            method="POST"
            action={`mailto:${data.contacts.data.email}`}
            encType="text/plain"
            className="contacts__data--email"
          >
            <button className="contacts__data--email-btn">
              {data.contacts.data.email}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
