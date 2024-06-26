import LinkPro from "../components/links/LinkPro.jsx";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>Contactez-moi.</h1>
      <p>
        Je suis actuellement spécialisé en développement Front-end.
        <br />
        Je vous invite à entrer en contact afin de discuter ensemble à propos d&apos; un éventuel projet.
      </p>
      <div className="contact-social">
        <LinkPro type="linkedin" />
        <LinkPro type="mail" />
        <LinkPro type="resume" />
      </div>
    </section>
  );
}
// https://drive.google.com/file/d/1rGj6IImAz5KWKPPJoTw4h89QS2_juWPK/view?usp=sharing
export default Contact;
