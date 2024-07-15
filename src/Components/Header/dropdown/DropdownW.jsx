import React, { useState } from "react";
import { MenuItemsW } from "./MenuItemsW";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function DropdownW() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItemsW.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
              {item.subItems && (
                <ul className="sub-menu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        className="sub-item"
                        to={subItem.path}
                        onClick={() => setClick(false)}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownW;
