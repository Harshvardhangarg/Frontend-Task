import PropTypes from "prop-types";
import "./search-bar.css";

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`search-bar ${className}`}>
      <div className="search-by-artwork-artist-name-wrapper">
        <div className="search-by-artwork">
          search by artwork, artist name ...
        </div>
      </div>
      <div className="search-bar-child" />
      <img
        className="claritysearch-line-icon"
        loading="lazy"
        alt=""
        src="/claritysearchline.svg"
      />
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
