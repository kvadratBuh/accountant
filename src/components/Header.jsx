const { menu } = require("../data.json");

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__nav--list">
            {Object.entries(menu).map((entry) => {
              const link = "#" + entry[0];
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
