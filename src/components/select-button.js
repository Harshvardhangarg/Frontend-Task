import { useMemo } from "react";
import PropTypes from "prop-types";
import "./select-button.css";

const SelectButton = ({ className = "", propFlex, propWidth }) => {
  const selectButtonStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className={`select-button ${className}`} style={selectButtonStyle}>
      <div className="filtre-request-sent">
        <div className="filtre" />
      </div>
      <div className="select">select</div>
    </div>
  );
};

SelectButton.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default SelectButton;
