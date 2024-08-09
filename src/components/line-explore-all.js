import PropTypes from "prop-types";
import "./line-explore-all.css";

const LineExploreAll = ({ className = "" }) => {
  return (
    <div className={`line-explore-all ${className}`}>
      <div className="explore1">explore</div>
    </div>
  );
};

LineExploreAll.propTypes = {
  className: PropTypes.string,
};

export default LineExploreAll;
