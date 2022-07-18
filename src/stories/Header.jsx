/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";

import white_logo_color_background from "./designAssets/DesignAssetsLogosVertical/white_logo_color_background.jpg";
import Palette from "./designAssets/DesignAssetsColors";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div
      css={{
        fontFamily: "Nunito Sans, Helvetica, Arial, sans-serif",
        padding: "15, 20",
        display: "flex",
        alignItems: "center",
        justifyContent: "spaceBetween",
        backgroundColor: "#c3073f",
      }}
    >
      <img
        css={{
          maxHeight: "150px",
          maxWidth: "150px",
        }}
        src={white_logo_color_background}
      />
      <div>CAMPAIGN</div>
      <div>CHARACTERS</div>
      <div>WORLDBUILDING</div>
      <div>BLOG</div>
      <div>DICE</div>
      <div>PURCHASE</div>
      <div>DARK</div>
      <div>USERNAME</div>
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {
  user: null,
};
