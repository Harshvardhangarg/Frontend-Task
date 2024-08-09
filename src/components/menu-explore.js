import PropTypes from "prop-types";
import "./menu-explore.css";

const MenuExplore = ({ className = "" }) => {
  return (
    <div className={`menu-explore ${className}`}>
      <div className="bouton-explorer">
        <div className="bouton-explorer-child" />
        <a className="home">Home</a>
      </div>
      <div className="bouton-artworks">
        <div className="bouton-artworks-child" />
        <a className="explore">Explore</a>
      </div>
      <div className="bouton-create">
        <div className="bouton-create-child" />
        <div className="create">Create</div>
      </div>
      <button className="bouton-settings">
        <div className="bouton-create-child" />
        <a className="settings">Settings</a>
      </button>
    </div>
  );
};

MenuExplore.propTypes = {
  className: PropTypes.string,
};

export default MenuExplore;
