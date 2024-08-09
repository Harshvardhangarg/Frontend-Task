import PropTypes from "prop-types";
import "./powered-by.css";

const PoweredBy = ({ className = "" }) => {
  return (
    <footer className={`powered-by1 ${className}`}>
      <div className="bas-de-page" />
      <div className="powered-by2">{`POWERED BY `}</div>
    </footer>
  );
};

PoweredBy.propTypes = {
  className: PropTypes.string,
};

export default PoweredBy;
