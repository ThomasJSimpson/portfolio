const Tag = ({ tag }) => {
  return (
    <div className="tag ellipsis" key={tag}>
      <p>{tag}</p>
    </div>
  );
};
export default Tag;
