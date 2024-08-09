import PropTypes from "prop-types";
import "./submenu-explore-artist.css";

const SubmenuExploreArtist = ({ className = "" }) => {
  return (
    <div className={`submenu-explore-artist ${className}`}>
      <div className="collection">collection</div>
      <div className="year">type</div>
      <div className="year">year</div>
      <div className="virtual-gallery">virtual gallery</div>
    </div>
  );
};

SubmenuExploreArtist.propTypes = {
  className: PropTypes.string,
};

export default SubmenuExploreArtist;
