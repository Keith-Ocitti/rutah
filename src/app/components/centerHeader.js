import "../styles/main.css";

const CenterHeader = ({ heading }) => {
  return (
    <div className="headline-bar">
      <div className="div1"></div>
      <p>{heading}</p>
      <div className="div2"></div>
    </div>
  );
};

export default CenterHeader;
