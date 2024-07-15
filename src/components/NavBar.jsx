import NavMenu from "./NavMenu";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const logo = "{ T }";
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();
  const returnToHomePage = () => {
    console.log("returnToHomePage");
    return navigate("/");
  };
  return (
    <header className="header">
      <h1 onClick={returnToHomePage}>{logo}</h1>

      <NavMenu type="desktop" isHomePage={isHomePage} />
      <NavMenu type="mobile" isHomePage={isHomePage} />
      <NavMenu type="notHome" isHomePage={isHomePage} />
    </header>
  );
};
export default NavBar;
