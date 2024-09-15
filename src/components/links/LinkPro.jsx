import githubIcon from "../../assets/icones/github-green.png";
import linkedinIcon from "../../assets/icones/linkedin-green.png";
import mailIcon from "../../assets/icones/mail-green.png";
import resumeIcon from "../../assets/icones/resume-green.png";
import { Link } from "react-router-dom";

const LinkPro = ({ type, className }) => {
  const linkedinProfil = "https://www.linkedin.com/in/thomas-berenger-mtp/";
  const gitHubProfil = "https://github.com/ThomasJSimpson";
  const mailPrivate = "berenger.thomas@gmail.com";
  const resumeDrive = "https://drive.google.com/file/d/1xzPMTobFAVo3D1VwbVXba9yxXwRiKF3C/view?usp=sharing";

  let icon, link, text;

  switch (type) {
    case "github":
      icon = githubIcon;
      link = gitHubProfil;
      text = "GitHub";
      break;
    case "linkedin":
      icon = linkedinIcon;
      link = linkedinProfil;
      text = "LinkedIn";
      break;
    case "mail":
      icon = mailIcon;
      link = `mailto:${mailPrivate}`;
      text = "Email";
      break;
    case "resume":
      icon = resumeIcon;
      link = resumeDrive;
      text = "Curriculum Vitae";
      break;
    default:
      break;
  }
  return (
    <Link to={link} className={className} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className="link-pro">
        <img src={icon} />
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default LinkPro;
