const {
  data: { howitworks },
} = require("../data.json");

export const HowItWorks = () => (
  <section className="section howitworks">
    <div className="howitworks__wrapper">
      <h2 className="howitworks__title">{howitworks.title}</h2>
      <div className="howitworks__content">
        {howitworks.data.map((el) => (
          <div key={el.title} className="howitworks__content--item">
            <p className="howitworks__content--item-title">{el.title}</p>
            <p className="howitworks__content--item-text">{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
