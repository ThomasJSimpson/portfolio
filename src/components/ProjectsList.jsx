import ProjectCard from "./ProjectCard";
import projects from "../data/dataProjects.js";

const ProjectList = () => {
  return (
    <div className="projects-list">
      {projects.map(({ id, name, description, tags, screenshot, link }) => (
        <ProjectCard key={id} id={id} name={name} description={description} tags={tags} screenshotSrc={screenshot} link={link} />
      ))}
    </div>
  );
};
export default ProjectList;
