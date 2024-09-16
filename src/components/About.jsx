import portrait from "../assets/portrait.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-descr">
        <h1>⚡ À propos de moi</h1>
        <p>💻 Développeur Front-end & Apprenti Full-stack en recherche d&apos;une entreprise pour une alternance | Passionné par les technologies et le développement logiciel 🚀</p>
        <p>
          🎓 Depuis février 2024, je suis titulaire d&apos;un <span className="strong-green">diplôme RNCP de niveau 6 en &quot;Développeur d&apos;applications Front-end JavaScript/React&quot;</span>. Depuis l&apos;obtention de ce diplôme, je me consacre à l&apos;approfondissement de mes connaissances en explorant les technologies découvertes durant ma formation, afin de consolider et renforcer mes
          compétences.
        </p>

        <p>
          📚 Récemment, j&apos;ai eu l&apos;opportunité d&apos;intégrer <span className="strong-green">l&apos;école STUDI pour suivre une formation en alternance en tant que Développeur Full-stack.</span> Cette formation débutera prochainement et je suis actuellement <span className="strong-green">à la recherche d&apos;une entreprise 🏢 pour un contrat d&apos;apprentissage</span>. Mon objectif est
          de développer des compétences solides en back-end tout en mettant mes compétences front-end à contribution.
        </p>
        <p>
          💡 Mon parcours en autodidacte m&apos;a permis de mener à bien plusieurs projets, mais j&apos;ai rapidement réalisé l&apos;importance d&apos;une formation en alternance. Ce format me permettra non seulement d&apos;appliquer mes compétences au sein d&apos;une entreprise, mais aussi de bénéficier de{" "}
          <span className="strong-green">l&apos;accompagnement d&apos;un mentor expérimenté 👨‍🏫, assurant une montée en compétences continue.</span>
        </p>
        <p>
          🌟 Mon objectif à long terme est de <span className="strong-green">devenir un développeur Full-stack compétent</span>, capable de mener à bien des projets aussi bien en front-end qu&apos;en back-end. Cette polyvalence est essentielle pour moi, car elle me permettra de donner vie à mes idées 💡 et de réaliser mes projets personnels de manière autonome.
        </p>
        <p>
          🤝 En plus de mes compétences techniques, je possède un solide <span className="strong-green">esprit d&apos;équipe</span>, nourri par <span className="strong-green">des valeurs de respect, d&apos;empathie et de collaboration</span>. J&apos;aime apporter mon aide à ceux qui en ont besoin, et je crois fermement en l&apos;importance d&apos;une bonne dynamique collective dans la réussite
          d&apos;un projet.
        </p>
        <p>
          📢 Je suis actuellement <span className="strong-green">ouvert à toute opportunité de collaboration en alternance</span> dans le cadre de ma formation, afin de contribuer à la réussite de projets ambitieux tout en continuant à développer mes compétences.
        </p>
      </div>
      <div className="about-portrait">
        <img src={portrait} alt="Thomas Bérenger" />
      </div>
    </section>
  );
};

export default About;
