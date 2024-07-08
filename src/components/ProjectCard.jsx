import { Link } from "react-router-dom";
import Tag from "./Tag";

const ProjectCard = ({ name, description, tags, screenshotSrc, id }) => {
  return (
    <Link to={`/project/${id}`} className="project-card--link">
      <div className="project-card" key={name}>
        <div className="project-card--img">
          <img src={screenshotSrc} alt="Project" />
        </div>
        <div className="project-card--desc ">
          <h3 className="ellipsis">{name}</h3>
          <div className="tags-list">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <div>
            <p className="ellipsis">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
