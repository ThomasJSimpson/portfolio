import ProjectList from "./ProjectsList";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-descr">
        <h1>Mes derniers projets.</h1>
        <p>Voici les derniers projets sur lesquels j&apos;ai travaillé.</p>
      </div>
      <ProjectList />
    </section>
  );
};

export default Projects;
