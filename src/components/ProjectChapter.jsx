import ProjectChapterTitle from "./ProjectChapterTitle";

const ProjectChapter = ({ title, text }) => {
  return (
    <section className="project-chapter">
      <ProjectChapterTitle title={title} />
      {typeof text === "string" ? (
        <p>{text}</p>
      ) : (
        <ul>
          {text.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default ProjectChapter;
