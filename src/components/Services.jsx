import { ServicesItem } from "./ServicesItem";

export const Services = () => {
  return (
    <section id="services" className="section services">
      <h2 className="services__title">Послуги</h2>
      <div className="services__container">
        <ServicesItem
          title="Комплексний бухгалтерський аутсорсинг"
          text="пшыщорепжщшкгерщ"
          optionals={[
            {
              title: "Послуги для фізичних осіб",
              list: [
                "Бухгалтерське обслуговування ФОП (СПД, ПП)",
                "Бухгалтерськи консультациї",
                "Бухгалтерський аутсорсинг",
                "Аудиторські консультації та послуги",
              ],
            },
            {
              title: "Послуги для юридичних осіб",
              list: [
                "Бухгалтерське обслуговування ТОВ",
                "Бухгалтерськи консультациї",
                "Бухгалтерський аутсорсинг",
                "Аудиторські консультації та послуги",
              ],
            },
          ]}
        />
        <div className="services__item--wrapper">
          <div className="services__item--title">Бухгалтерський супровід</div>
          <div className="services__item--text">пшыщорепжщшкгерщ</div>
        </div>
        <div className="services__item--wrapper">
          <div className="services__item--title">
            Відновлення бухгалтерського та податкового обліку
          </div>
          <div className="services__item--text">пшыщорепжщшкгерщ</div>
        </div>
        <div className="services__item--wrapper">
          <div className="services__item--title">
            Бухгалтерські консультації
          </div>
          <div className="services__item--text">пшыщорепжщшкгерщ</div>
        </div>
        <div className="services__item--wrapper">
          <div className="services__item--title">
            Організація бухгалтерського обліку на підприємстві
          </div>
          <div className="services__item--text">пшыщорепжщшкгерщ</div>
        </div>
        <div className="services__item--wrapper">
          <div className="services__item--title">
            Декларація про майновий стан та доходи фізичних осіб
          </div>
          <div className="services__item--text">пшыщорепжщшкгерщ</div>
        </div>
        <div className="services__item--wrapper">
          <div className="services__item--title">
            Супровід податкових перевірок
          </div>
          <div className="services__item--text">пшыщорепжщшкгерщ</div>
        </div>
      </div>
    </section>
  );
};
