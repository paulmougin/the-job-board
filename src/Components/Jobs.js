const Jobs = (props) => {
  return (
    <div className="Jobs">
      <div className="Heading">
        <h2>{props.title}</h2>
      </div>
      <div className="Type">
        <span>{props.contractType}</span>
        <span>{props.country}</span>
        <span>{props.city}</span>
      </div>
    </div>
  );
};
export default Jobs;
