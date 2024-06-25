const Tag = ({ tag }) => {
  return (
    <div className="tag" key={tag}>
      <p>{tag}</p>
    </div>
  );
};
export default Tag;
