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

export { scrollToSectionWithOffset };
