const {
  data: { about },
} = require("../data.json");

export const AboutUs = () => (
  <section id="about_us" className="section about">
    <h2 className="about__title">{about.title}</h2>
    {about.content.map((contentEl, index) => {
      const name = "about__" + contentEl.type;

      if (contentEl.text) {
        return (
          <p key={index.toString()} className={name}>
            {contentEl.text}
          </p>
        );
      }

      if (contentEl.data) {
        return (
          <ul key={name} className="about__list">
            {contentEl.data.map((listEl, listInd) => (
              <li key={`${index}-${listInd}`} className="about__list--item">
                {listEl}
              </li>
            ))}
          </ul>
        );
      }

      return null;
    })}
  </section>
);
