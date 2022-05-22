import bgImage from "../assets/accountant.png";
const {
  data: { message },
} = require("../data.json");

export const Message = () => {
  const handleOpenContacts = () => {
    document.location.href =
      document.location.origin + document.location.pathname + "#contacts";
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

        <button
          onClick={handleOpenContacts}
          className="message__contact--form-btn"
        >
          {message.contact.button}
        </button>
      </div>
    </section>
  );
};
