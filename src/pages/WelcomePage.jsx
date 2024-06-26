import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import LinkPro from "../components/links/LinkPro.jsx";

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
        <div className="welcome-social">
          <LinkPro type="github" />
          <LinkPro type="linkedin" />
          <LinkPro type="mail" />
          <LinkPro type="resume" />
        </div>
      </section>
      <About />
      <Projects />
    </>
  );
};

export default WelcomePage;
