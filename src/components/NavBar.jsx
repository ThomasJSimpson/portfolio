const NavBar = () => {
  const logo = "{ T }";
  const scrollToSectionWithOffset = (id, offsetVH) => {
    const element = document.getElementById(id);
    if (element) {
      const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const elementPosition = element.getBoundingClientRect().top + scrollY;
      const offset = (window.innerHeight * offsetVH) / 100;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="header">
      <h1>{logo}</h1>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionWithOffset("about", 12);
              }}
            >
              À propos de moi
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionWithOffset("projects", 12);
              }}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionWithOffset("contact", 12);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
