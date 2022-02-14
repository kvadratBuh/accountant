import { ServicesItem } from "./ServicesItem";

const {
  data: { services },
} = require("../data.json");

export const Services = () => {
  return (
    <section id="services" className="section services">
      <h2 className="services__title">{services.title}</h2>
      <div className="services__container">
        {services.data.map((servicesEl) => {
          return (
            <ServicesItem
              title={servicesEl.title}
              subdata={servicesEl.subdata}
            />
          );
        })}
      </div>
    </section>
  );
};
