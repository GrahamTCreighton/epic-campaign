import React from "react";
import PropTypes from "prop-types";
{
  "presets": ["@emotion/babel-preset-css-prop"]
}
import {css} from "@emotion/react"
import { Button } from "./Button";
import white_logo_color_background from "./designAssets/DesignAssetsLogosVertical/white_logo_color_background.jpg";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <img css={{
        maxHeight: "150px",
        maxWidth: "150px",
      }} src={white_logo_color_background} />
      <div>CAMPAIGN</div>
      <div>CHARACTERS</div>
      <div>WORLDBUILDING</div>
      <div>BLOG</div>
      <div>DICE</div>
      <div>PURCHASE</div>
      <div>DARK</div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
