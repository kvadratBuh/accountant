import { useState } from "react";

const TOP_OFFSET = 160;

export const ServicesItem = ({ title, subdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getStyle = (style) => (isOpen ? style : `${style} closed`);

  const handleClick = (e) => {
    const { pageY } = e;

    setIsOpen((p) => {
      if (!p) {
        setTimeout(
          () =>
            window.scrollTo({ top: pageY - TOP_OFFSET, behavior: "smooth" }),
          100
        );
      }
      return !p;
    });
  };
  return (
    <div className="services__item">
      <div className={getStyle("services__item--title")} onClick={handleClick}>
        {title}
      </div>
      {subdata.map((subEl) => {
        return (
          <SubServicesItem
            key={subEl.title}
            title={subEl.title}
            optionals={subEl.optionals}
            getStyle={getStyle}
          />
        );
      })}
    </div>
  );
};

const SubServicesItem = ({ title, optionals, getStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getOptionalsStyle = (style) =>
    isOpen ? style : `${style} closed-optional`;
  return (
    <div
      className={getStyle("services__item--sub")}
      onClick={() => setIsOpen((p) => !p)}
    >
      <div className="services__item--sub-title">
        {getDivider(isOpen, optionals?.length)}
        {title}
      </div>
      {optionals ? (
        <ul className={getOptionalsStyle("services__item--optionals")}>
          {optionals.map((optional) =>
            typeof optional === "string" ? (
              <li key={optional} className="services__item--optionals-item">
                {optional}
              </li>
            ) : (
              <li
                key={optional.title}
                className="services__item--optionals-item"
              >
                <div className=" services__item--optionals-item--withdesc">
                  <span>{optional.title}</span>
                  <ul className="services__item--optionals-item--withdesc-desc">
                    {optional.desc.map((descEl) => (
                      <li key={descEl.toString()}>{descEl}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>
      ) : null}
    </div>
  );
};

function getDivider(isOpen, optionsLength) {
  if (!optionsLength) {
    return "";
  }
  return isOpen ? "- " : "+ ";
}
