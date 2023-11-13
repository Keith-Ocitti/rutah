import "../styles/main.css";

const CenterHeader = ({ heading, join }) => {
  return (
    <div className="headline-bar">
      <div className="div1"></div>
      <p>{heading}</p>
      {join ? (
        <button className="prof-join">
          <a href="https://forms.gle/SSvnFH7kv3MVv8WK6" target="_blank">
            Join Us
          </a>
        </button>
      ) : (
        ""
      )}
      <div className="div2"></div>
    </div>
  );
};

export default CenterHeader;
