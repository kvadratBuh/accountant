import { useEffect, useRef, useState } from "react";

const TOP_OFFSET = 220;

export const ServicesItem = ({ title, subdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});
  useEffect(() => {
    const items = {};
    subdata.forEach((el, index) => {
      items[index] = false;
    });
    setOpenItems(items);
  }, []);
  const getStyle = (style) => (isOpen ? style : `${style} closed`);

  const handleClick = (e) => {
    const { pageY } = e;

    setIsOpen((p) => {
      if (!p) {
        const newItems = {};
        for (let item in openItems) {
          newItems[item] = false;
        }
        setOpenItems(newItems);
        setTimeout(() => {
          window.scrollTo({ top: pageY - TOP_OFFSET, behavior: "smooth" });
        }, 100);
      }
      return !p;
    });
  };
  return (
    <div className="services__item">
      <div className={getStyle("services__item--title")} onClick={handleClick}>
        {title}
      </div>
      {subdata.map((subEl, index) => {
        return (
          <SubServicesItem
            key={subEl.title}
            title={subEl.title}
            optionals={subEl.optionals}
            getStyle={getStyle}
            index={index}
            setOpenItems={setOpenItems}
            openItems={openItems}
          />
        );
      })}
    </div>
  );
};

const SubServicesItem = ({
  title,
  optionals,
  getStyle,
  index,
  setOpenItems,
  openItems,
}) => {
  const serviceItemRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openItems[index]);
  }, [openItems, index]);

  const getOptionalsStyle = (style) =>
    isOpen ? style : `${style} closed-optional`;

  const handleClick = (e) => {
    setOpenItems((prevItems) => {
      const newItems = {};
      let val = false;
      Object.entries(prevItems).forEach(([key, entry]) => {
        if (!val) {
          val = Number(key) === index ? !entry : false;
        }
        newItems[key] = Number(key) === index ? !entry : false;
      });

      if (val) {
        setTimeout(() => {
          window.scrollTo({
            top: serviceItemRef.current.offsetTop - TOP_OFFSET,
            behavior: "smooth",
          });
        }, 300);
      }

      return newItems;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      serviceItemRef.current.style.setProperty(
        "--clientHeight",
        serviceItemRef.current.clientHeight < 200
          ? 1000
          : serviceItemRef.current.clientHeight + "px"
      );
    }, 300);
  }, [isOpen]);

  return (
    <div
      ref={serviceItemRef}
      className={getStyle("services__item--sub")}
      onClick={handleClick}
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
