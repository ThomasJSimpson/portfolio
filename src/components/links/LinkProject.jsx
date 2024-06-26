import githubIcon from "../../assets/icones/github-white.png";
import demoIcon from "../../assets/icones/demo-white.png";
import { Link } from "react-router-dom";

const LinkProject = ({ type, links }) => {
  return (
    <div className="link-project">
      <img className="icon" src={type === "github" ? githubIcon : demoIcon} />
      <Link to={type === "github" ? links.GitHub : links.Demo} target="_blank" style={{ textDecoration: "none" }}>
        <p>{type === "github" ? "GitHub" : "Demo"}</p>
      </Link>
    </div>
  );
};

export default LinkProject;
