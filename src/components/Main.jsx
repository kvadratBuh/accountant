import bgImage from "../assets/accountant.png";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="section message">
          <img src={bgImage} alt="accountant" className="message__image" />
          <h1 className="message__title">
            Бухгалтерське обслуговування
            <span>аутсорсинг бухгалтерії для бізнесу</span>
          </h1>

          <div className="message__contact">
            <p className="message__contact--title">
              Залиште заявку на безкоштовну консультацію.
            </p>
            <form
              method="POST"
              action="mailto:kvadrat.buh.out@gmail.com"
              enctype="text/plain"
              className="message__contact--form"
            >
              {/* <input
                placeholder="Your email"
                type="email"
                className="message__contact--form-input"
              /> */}
              <button className="message__contact--form-btn">
                Зв'яжіться з нами
              </button>
            </form>
          </div>
        </section>
        <section id="about_us" className="section about">
          <h2 className="about__title">Про нас:</h2>
          <p className="about__content">
            Ми постійно трімаємо руку на пульсі змін господарського та
            податкового права України та за її межами. Працюючи з нами, Ви
            отримаєте можливість повністю сконцентруватися на бізнесі. Наша
            компанія не ходить у відпустку чи на лікарняний. Нас не потрібно
            забезпечувати робочими місцями, канцелярією, оргтехнікою та ін.
          </p>
          <p className="about__content">
            Ми прагнемо надавати нашим клієнтам максимально компетентну та
            своєчасну консультаційну підтримку з усіх питань, які стосуються
            фінансів, обліку та звітності, податків, права тощо. Наша мета -
            створити найбільш сприятливі умови для розвитку вашого бізнесу, і
            для цього ми не шкодуємо ані своїх сил, ані знань.
          </p>
          <p className="about__content">
            Для нас вкрай важливо забезпечувати якісний рівень послуг. Ми
            забезпечуємо здагоджену роботу кваліфікованих фахівців. І для нас
            пріорітетно, щоб наш рівень компетентності завжди відповідав Вашим
            очікуванням. Для цього ми ретельно розраховуємо навантаження на
            наших фахівців і оперативно розподіляємо їх по задачам, тримаючи
            руку на пульсі кожного клієнта.
          </p>
          <p className="about__full">
            Ми можемо надати, як одноразову допомогу, так і абонентське
            обслуговування на тривалий строк. Ми забезпечуємо кожному клієнтові
            якісні послуги та індивідуальний підхід. Крім того, наша компанія
            гарантує:
          </p>
          <ul className="about__list">
            <li className="about__list--item">
              стабільність. Ми налаштовані на довгу співпрацю з кожним клієнтом,
              тому ми особливу увагу приділяємо стабільності нашого штату, щоб
              ви - наш клієнт, не відчували ніяких труднощів і незручностей;
            </li>
            <li className="about__list--item">
              лояльні ціни на послуги, завдяки індивідуальному підходу до
              кожного клієнта;
            </li>
            <li className="about__list--item">
              гарантія конфіденційності даних клієнта. Доступ до отриманої
              інформації клієнта мають тільки ті процівнікі, які безпосередньо
              беруть участь у процесі. Крім того, ми несемо відповідальність за
              розголошення будь-яких персональних даних клієнта;
            </li>
            <li className="about__list--item">
              гарантіяч якості надаваних послуг. Ми впевнени в результаті
              завжди! Завдяки продуманим механізмам роботи, нашому
              професіоналізму, досвіду і компетентності команди, ми сміливо
              можемо гарантувати якість наданих послуг;
            </li>
            <li className="about__list--item">
              грамотну організацію бухгалтерського й податкового обліку, а також
              їх оптимізацію;
            </li>
            <li className="about__list--item">
              достовірну й своєчасну інформацію про виконану роботу та облік на
              підприємстві в цілому;
            </li>
            <li className="about__list--item">
              повну конфіденційність даних, що стосуються вашого бізнесу, і
              збереження комерційної таємниці;
            </li>
            <li className="about__list--item">
              гнучкість і лояльність стосовно оплати послуг.
            </li>
          </ul>
          <p className="about__full">
            Організація бухгалтерського обліку на підприємстві дозволить не
            тільки коректно вести облік і здавати звітність, а й одержувати
            достовірні фінансові дані, які будуть сприяти прийняттю правильниї
            управлінських рішень.
          </p>
          <p className="about__full">
            Щоб довідатися більше про перспрективи спивробітництва з нами,
            просто подзвоніть нам в офіс або напишіть нам на почту. Вартість
            послуг наших фихівців буде залежати прямо пропорційно обсягом робіт.
            Але в будь-якому разі ми зможемо підібрати прийнятний варіант для
            вас. Адже основний принцип нашої цінової політики - це доступність
            якісного сервісу кожному!
          </p>
        </section>
        <section className="section howitworks">
          <h2 className="howitworks__title">Як відбувається обслуговування</h2>
          <div className="howitworks__content">
            <div className="howitworks__content--item">
              <p className="howitworks__content--item-title">Комунікації</p>
              <p className="howitworks__content--item-text">
                Вас обслуговує ціла команда бухгалтерів, але спілкується один
                закріплений Старший бухгалтер. Завдання можна ставити по
                телефону або по електронній пошті.
              </p>
            </div>
            <div className="howitworks__content--item">
              <p className="howitworks__content--item-title">Документи</p>
              <p className="howitworks__content--item-text">
                Скани документів Ви скидаєте над для оператиного відображення
                обліку. Оригінали документів забираються по домовленності, після
                чого вони перевіряються і зшиваються в папки. Ви отримуєте
                папку, готову до податкової перевірки.
              </p>
            </div>
            <div className="howitworks__content--item">
              <p className="howitworks__content--item-title">Юрист</p>
              <p className="howitworks__content--item-text">
                Юрист працює в проектній команді з бухгалтерами та залучається
                до вирішення завдань при необхідності. Він оплачується
                додатково, але Ви отримуєте комплексне рішення і економите
                можливі втрати.
              </p>
            </div>
            <div className="howitworks__content--item">
              <p className="howitworks__content--item-title">1С</p>
              <p className="howitworks__content--item-text">
                Ми розміщуємо Вашу 1С на нашому віддаленому сервері і при
                необхідності надаємо Вам доступ. Або ж Ви можете просто надати
                нам доступ до 1С на Вашому сервері.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="section services">
          <h2 className="services__title">Послуги</h2>
          <div className="services__container">
            <div className="services__item--wrapper">
              <div className="services__item--title">
                Комплексний бухгалтерський аутсорсинг
              </div>
              <div className="services__item--text">пшыщорепжщшкгерщ</div>
              <div className="services__item--wrapper-inner">
                <div className="services__item--optional">
                  <h3 className="services__item--optional-title">
                    Послуги для фізичних осіб
                  </h3>
                  <ul className="services__item--optional-list">
                    <li className="services__item--optional-listitem">
                      Бухгалтерське обслуговування ФОП (СПД, ПП)
                    </li>
                    <li className="services__item--optional-listitem">
                      Бухгалтерськи консультациї
                    </li>
                    <li className="services__item--optional-listitem">
                      Бухгалтерський аутсорсинг
                    </li>
                    <li className="services__item--optional-listitem">
                      Аудиторські консультації та послуги
                    </li>
                  </ul>
                </div>
                <div className="services__item--optional">
                  <h3 className="services__item--optional-title">
                    Послуги для юридичних осіб
                  </h3>
                  <ul className="services__item--optional-list">
                    <li className="services__item--optional-listitem">
                      Бухгалтерське обслуговування ТОВ
                    </li>
                    <li className="services__item--optional-listitem">
                      Бухгалтерськи консультациї
                    </li>
                    <li className="services__item--optional-listitem">
                      Бухгалтерський аутсорсинг
                    </li>
                    <li className="services__item--optional-listitem">
                      Аудиторські консультації та послуги
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__item--wrapper">
              <div className="services__item--title">
                Бухгалтерський супровід
              </div>
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
      </div>
    </main>
  );
};
