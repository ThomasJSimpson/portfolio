import portrait from "../assets/portrait.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-descr">
        <h1>⚡ À propos de moi</h1>
        <p>
          Je suis l&rsquo;heureux détenteur d&rsquo;un <span className="strong-green">diplôme RNCP de niveau 6 de &ldquo;Développeur d&rsquo;applications Front-end Javascript/React&rdquo;</span> depuis février 2024. Depuis l&apos;obtention de mon diplôme, je me plonge dans la littérature technique des différentes technologies que j&apos;ai pu découvrir, dans le but de consolider mes compétences
          acquises tout au long de ma formation.
        </p>
        <p>
          Récemment, j&apos;ai eu le plaisir d&apos;être accepté à <span className="strong-green">la Wild Code School pour une formation de 15 mois de Développeur Full-stack, qui débutera le 23 septembre 2024.</span>
        </p>
        <p>
          Cette formation me permettra de compléter mon profil en développant des compétences solides en back-end. En préparation de cette formation, je serai autorisé à <span className="strong-green">exercer en entreprise dès le 28 juillet 2024</span>.
        </p>
        <p>
          Après avoir effectué l&rsquo;ensemble de mes projets professionnels en <span className="strong-green">autodidacte</span>, j’ai pris conscience de l&apos;importance de me diriger vers <span className="strong-green">un contrat de professionnalisation en alternance.</span> Cette solution me permettrait de consolider mes compétences en Front-end, directement immergé au sein d&rsquo;une
          entreprise, et <span className="strong-green">sous la supervision d&rsquo;un professionnel chevronné</span> pouvant me fournir un retour constant sur mes réalisations.
        </p>
        <p>
          Mon objectif étant de <span className="strong-green">devenir compétent en développement back-end</span> également, mon choix se dirige naturellement vers un diplôme de développeur web Full-stack. En effet, afin de pouvoir également réaliser mes idées et projets personnels, c&rsquo;est une étape indispensable au parcours d&rsquo;un développeur qui souhaite laisser libre cours à sa
          créativité.
        </p>
        <p>
          J&apos;ai choisi ce domaine qu&rsquo;est le développement car j&apos;ai toujours été <span className="strong-green">attiré par les technologies modernes</span> depuis très jeune et eu une certaine facilité à les utiliser. La perspective de pouvoir concrétiser mes idées ainsi que de pouvoir résoudre des problèmes par la solution logicielle est quelque chose qui me paraît fascinant.
        </p>
        <p>
          Je pense également posséder les qualités nécessaires pour évoluer en équipe au sein d&rsquo;une entreprise. J&apos;ai toujours eu <span className="strong-green">l&apos;esprit d&apos;équipe</span>, en partie grâce au respect et à une certaine <span className="strong-green">empathie</span> envers autrui, ainsi qu&apos;à <span className="strong-green">mon esprit collaboratif</span>. Je suis
          également le premier à vouloir <span className="strong-green">aider ceux qui en ont besoin</span>, et ce depuis mes plus anciens souvenirs.
        </p>
        {/* <p>Je vous remercie pour votre intérêt et vous souhaite une agréable visite sur mon portfolio.</p> */}
      </div>
      <div className="about-portrait">
        <img src={portrait} alt="Thomas Bérenger" />
      </div>
    </section>
  );
};

export default About;
