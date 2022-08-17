const Box = (props) => {
  const { className, boxText } = props;
  return <box className={`${className}`}>{boxText}</box>;
};

const element = (
  <div className="box-Container">
    <h1 className="mainHeading">Boxes</h1>
    <div className="box-card">
      <Box className="box1" boxText="Small" />
      <Box className="box2" boxText="Medium" />
      <Box className="box3" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
