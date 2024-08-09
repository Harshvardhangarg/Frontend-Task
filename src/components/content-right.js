import MenuExplore from "./menu-explore";
import SubmenuExploreArtist from "./submenu-explore-artist";
import PropTypes from "prop-types";
import "./content-right.css";

const ContentRight = ({ className = "" }) => {
  return (
    <div className={`content-right ${className}`}>
      <div className="menu-wrapper">
        <MenuExplore />
      </div>
      <SubmenuExploreArtist />
    </div>
  );
};

ContentRight.propTypes = {
  className: PropTypes.string,
};

export default ContentRight;
