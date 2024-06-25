import githubIcon from "../../assets/icones/github.png";
import demoIcon from "../../assets/icones/demo.png";
import { Link } from "react-router-dom";

const LinkPerso = ({ type, links }) => {
  console.log(links);
  return (
    <div className="link-perso">
      <img className="icon" src={type === "github" ? githubIcon : demoIcon} />
      <Link to={type === "github" ? links.GitHub : links.Demo} target="_blank" style={{ textDecoration: "none" }}>
        <p>{type === "github" ? "GitHub" : "Demo"}</p>
      </Link>
    </div>
  );
};

export default LinkPerso;
