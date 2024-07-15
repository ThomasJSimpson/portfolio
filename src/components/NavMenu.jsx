import iconNav from "../assets/icones/menu-icon.png";
import closeIcon from "../assets/icones/close-icon.png";
import backIcon from "../assets/icones/back-icon.png";
import { useState } from "react";
import { scrollToSectionWithOffset } from "../data/utils.js";
import { useNavigate } from "react-router-dom";

const NavMenu = ({ type, isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const returnToHomePage = () => {
    return navigate("/");
  };
  if (isHomePage) {
    if (type === "desktop") {
      return (
        <nav className="menu-desktop">
          <ul>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionWithOffset("about", 12);
                }}
              >
                À propos de moi
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionWithOffset("projects", 12);
                }}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSectionWithOffset("contact", 12);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      );
    } else if (type === "mobile") {
      return (
        <nav className="menu-mobile">
          {isMenuOpen || <img src={iconNav} alt="menu" onClick={toggleMenu} />}

          {isMenuOpen && (
            <div className="menu-mobile--fixed">
              <ul>
                <li>
                  <img src={closeIcon} alt="menu" onClick={toggleMenu} />
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSectionWithOffset("about", 12);
                      setIsMenuOpen(false);
                    }}
                  >
                    À propos de moi
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSectionWithOffset("projects", 12);
                      setIsMenuOpen(false);
                    }}
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSectionWithOffset("contact", 12);
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      );
    }
  } else if (type === "notHome" && !isHomePage) {
    return (
      <nav className="menu-back">
        <img src={backIcon} alt="back" onClick={returnToHomePage} />
      </nav>
    );
  }
};
export default NavMenu;
