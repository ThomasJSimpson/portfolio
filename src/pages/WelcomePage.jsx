import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
// import ProjectList from "./ProjectsList.jsx";
// import gitHubIcon from "./assets/github.png";
// import linkedInIcon from "./assets/linkedin.png";
// import emailIcon from "./assets/mail.png";

const WelcomePage = () => {
  return (
    <>
      <section className="welcome">
        <p className="welcome-profil">
          <span className="welcome-hello">Bonjour! Je suis-</span>
          <br />{" "}
          <span className="welcome-name">
            Thomas <br />
            Bérenger.
          </span>
          <br />
          <span className="welcome-title">Développeur Web.</span>{" "}
          <span className="welcome-title--description">
            Autodidacte,
            <br />
            passioné de nouvelles technologies.
          </span>
        </p>
        <p className="welcome-spec">
          🚀 Spécialisé Front-end ( Javascript / React )
          <br />⚡ À la recherche d&apos;un contrat en Alternance, en vue d&apos;une formation FullStack chez la WildCodeSchool.
        </p>
        {/* <div className="welcome-social">
            <button>
              <img src={gitHubIcon} alt="GitHub Icon" />
              GitHub
            </button>

            <button>
              <img src={linkedInIcon} alt="linkedIn icon" />
              LinkedIn
            </button>
            <button>
              <img src={emailIcon} alt="email icon" />
              Email
            </button>
          </div> */}
      </section>
      <About />
      <Projects />
    </>
  );
};

export default WelcomePage;
