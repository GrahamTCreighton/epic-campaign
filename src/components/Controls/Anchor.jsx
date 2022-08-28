import React from "react";
import PropTypes from "prop-types";

export const Anchor = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <a
      type="anchor"
      href="/"
      css={{
        fontFamily: "Montserrat",
      }}
    >
      text
    </a>
  );
};

Anchor.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
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

Anchor.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
