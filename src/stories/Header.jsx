/** @jsxImportSource @emotion/react */
import React from "react";

import white_logo_color_background from "./designAssets/DesignAssetsLogosVertical/white_logo_color_background.jpg";
import Palette from "./designAssets/DesignAssetsColors";

export const Header = () => (
  <header>
    <div
      css={{
        fontFamily: "Nunito Sans, Helvetica, Arial, sans-serif",
        padding: "15, 20",
        display: "flex",
        alignItems: "center",
        justifyContent: "spaceBetween",
        backgroundColor: Palette.epicRed,
      }}
    >
      <img
        css={{
          maxHeight: "150px",
          maxWidth: "150px",
          borderBottomRightRadius: "10px",
        }}
        src={white_logo_color_background}
        alt="epic campaign logo"
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
