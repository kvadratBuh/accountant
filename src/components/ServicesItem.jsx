import { useState } from "react";

const TOP_OFFSET = 120;

export const ServicesItem = ({ title, subdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getStyle = (style) => (isOpen ? style : `${style} closed`);

  const handleClick = (e) => {
    const { pageY } = e;

    setIsOpen((p) => {
      if (!p) {
        setTimeout(
          () =>
            window.scrollTo({ top: pageY + TOP_OFFSET, behavior: "smooth" }),
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
      <div className="services__item--sub-title">{title}</div>
      {optionals ? (
        <ul className={getOptionalsStyle("services__item--optionals")}>
          {optionals.map((optional) => (
            <li className="services__item--optionals-item">{optional}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
