import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const logo = "{ T }";
  const navigate = useNavigate();

  const returnToHomePage = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <header className="header">
      <h1 onClick={returnToHomePage}>{logo}</h1>
      <NavMenu type="desktop" />
      <NavMenu type="mobile" />
      <NavMenu type="notHome" />
    </header>
  );
};
export default NavBar;
