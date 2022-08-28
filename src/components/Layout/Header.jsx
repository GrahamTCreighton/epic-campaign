/** @jsxImportSource @emotion/react */
import React from "react";

import white_logo_color_background from "stories/designAssets/DesignAssetsLogosVertical/white_logo_color_background.jpg";
import Palette from "stories/designAssets/DesignAssetsColors";

export const Header = () => (
  <header>
    <nav
      css={{
        fontFamily: "Montserrat",
        padding: "15, 20",
        display: "flex",
        alignItems: "center",
        justifyContent: "spaceBetween",
        backgroundColor: Palette.epicRed,
        color: Palette.lightColor,
      }}
    >
      <a href="/">
        <img
          css={{
            maxHeight: "150px",
            maxWidth: "150px",
            borderBottomRightRadius: "10px",
          }}
          src={white_logo_color_background}
          alt="epic campaign logo"
        />
      </a>
      <a
        css={{
          fontFamily: "Montserrat",
        }}
        href="/"
      >
        CAMPAIGN
      </a>
      <a href="/">CHARACTERS</a>
      <a href="/">WORLDBUILDING</a>
      <a href="/">BLOG</a>
      <a href="/">DICE</a>
      <a href="/">PURCHASE</a>
      <a href="/">DARK</a>
      <a href="/">USERNAME</a>
    </nav>
  </header>
);
