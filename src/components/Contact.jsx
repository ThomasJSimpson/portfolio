function Contact() {
  const email = "berenger.thomas@gmail.com";

  return (
    <section className="contact" id="contact">
      <h1>Contactez-moi.</h1>
      <p>
        Je suis actuellement spécialisé en développement Front-end.
        <br />
        Je vous invite à entrer en contact afin de discuter ensemble à propos d&apos; un éventuel projet.
      </p>
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <button> Contactez moi</button>
      </a>
    </section>
  );
}

export default Contact;
