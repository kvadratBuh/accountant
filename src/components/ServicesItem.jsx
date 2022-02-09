import { useState } from "react";

export const ServicesItem = ({ title, subdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getStyle = (style) => (isOpen ? style : `${style} closed`);
  return (
    <div className="services__item">
      <div
        className={getStyle("services__item--title")}
        onClick={() => setIsOpen((p) => !p)}
      >
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
