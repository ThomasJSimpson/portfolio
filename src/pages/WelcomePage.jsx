import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import LinkPro from "../components/links/LinkPro.jsx";

const WelcomePage = () => {
  return (
    <>
      <section className="welcome">
        <p className="welcome-profil">
          <span className="welcome-hello anim-welcome">Bonjour! Je suis-</span>
          <br />{" "}
          <span className="welcome-name ">
            <span className=" welcome-name--first anim-welcome">Thomas </span>

            <span className="welcome-name--last anim-welcome">Bérenger.</span>
          </span>
          <br />
          <span className="welcome-title anim-welcome">Développeur Web.</span>{" "}
          <span className="welcome-title--description anim-welcome">
            Autodidacte,
            <br />
            passioné de nouvelles technologies.
          </span>
        </p>
        <p className="welcome-spec anim-welcome">
          🚀 Spécialisé Front-end ( Javascript / React )
          <br />⚡ À la recherche d&apos;un contrat en Alternance, en vue d&apos;une formation FullStack chez la WildCodeSchool.
        </p>
        <div className="welcome-social anim-welcome--social">
          <LinkPro className="anim-social-1 anim-welcome--social" type="github" />
          <LinkPro className="anim-social-2 anim-welcome--social" type="linkedin" />
          <LinkPro className="anim-social-3 anim-welcome--social" type="mail" />
          <LinkPro className="anim-social-4 anim-welcome--social" type="resume" />
        </div>
      </section>
      <About />
      <Projects />
    </>
  );
};

export default WelcomePage;
