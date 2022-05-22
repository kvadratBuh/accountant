const { menu, header } = require("../data.json");

function getLink(entry) {
  return entry === "price" ? "services" : entry;
}

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">{header.title}</div>
        <nav className="header__nav">
          <ul className="header__nav--list">
            {Object.entries(menu).map((entry) => {
              const link = "#" + getLink(entry[0]);
              return (
                <li key={entry[0]} className="header__nav--list-item">
                  <a className="header__nav--list-link" href={link}>
                    {entry[1]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
