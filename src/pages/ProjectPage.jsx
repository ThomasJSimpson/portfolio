import projects from "../data/dataProjects.js";
import ProjectChapter from "../components/ProjectChapter.jsx";
import Tag from "../components/Tag.jsx";
import ProjectType from "../components/ProjectType.jsx";
import { useParams } from "react-router-dom";
import LinkPerso from "../components/links/LinkPerso.jsx";
const ProjectPage = () => {
  console.log(projects);
  const { projectId } = useParams();

  return (
    <>
      {projects.map(({ id, name, type, description, tags, screenshot, projectDescription, links }) => {
        if (id === Number(projectId)) {
          return (
            <div className="project-page" key={id}>
              <section className="project-page--overview">
                <div className="project-page--img">
                  <img src={screenshot} alt="Project" />
                </div>
                <div className="project-page--title">
                  <h1>{name}</h1>
                  <p className="project-page--title__desc">{description}</p>
                  <div className="tags-list">
                    {tags.map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                  </div>

                  <div className="links">
                    <LinkPerso type={"github"} links={links} />
                    <LinkPerso type={"demo"} links={links} />
                  </div>
                  <ProjectType type={type} />
                </div>
              </section>
              <section className="project-page--description">
                {Object.entries(projectDescription).map(([key, text]) => (
                  <ProjectChapter key={key} title={key} text={text} />
                ))}
              </section>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default ProjectPage;
