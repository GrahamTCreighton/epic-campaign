/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import Palette from "stories/designAssets/DesignAssetsColors";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ theme, size, label, ...props }) => {
  const mainCss = {
    fontFamily: "Montserrat",
    fontWeight: 600,
    border: 0,
    borderRadius: "10px",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  };

  const themes = {
    primary: {
      color: Palette.lightColor,
      backgroundColor: Palette.epicRed,
    },
    secondary: {
      color: "#333",
      backgroundColor: "transparent",
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
    },
    success: {
      backgroundColor: Palette.successColor,
      color: Palette.lightColor,
    },
  };

  const cssSizes = {
    small: {
      fontSize: "12px",
      padding: "10px 16px",
    },
    medium: {
      fontSize: "14px",
      padding: "11px 20px",
    },
    large: {
      fontSize: "16px",
      padding: "12px 24px",
    },
  };

  return (
    <button
      type="button"
      css={{
        ...mainCss,
        ...themes[theme],
        ...cssSizes[size],
      }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  theme: PropTypes.oneOf(["primary", "secondary", "successs"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  theme: "primary",
  size: "medium",
  onClick: undefined,
};
