import { useState } from "react";

export const ServicesItem = ({ title, text, optionals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getStyle = (style) => (isOpen ? style : `${style} closed`);
  return (
    <div
      className="services__item--wrapper"
      onClick={() => setIsOpen((p) => !p)}
    >
      <div className="services__item--title">{title}</div>
      <div className="services__item--text">{text}</div>
      {optionals && optionals.length ? (
        <div className={getStyle("services__item--wrapper-inner")}>
          {optionals && optionals.length ? (
            <div className={getStyle("services__item--wrapper-inner")}>
              {optionals.map((option, ind) => {
                return (
                  <div
                    key={ind.toString()}
                    className={getStyle("services__item--optional")}
                  >
                    <h3 className="services__item--optional-title">
                      {option.title}
                    </h3>
                    {option.list?.length ? (
                      <ul className="services__item--optional-list">
                        {option.list.map((el, ind2) => {
                          return (
                            <li
                              key={`${ind}-${ind2}`}
                              className="services__item--optional-listitem"
                            >
                              {el}
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
