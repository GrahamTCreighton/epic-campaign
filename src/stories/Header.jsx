import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import white_logo_color_background from "./designAssets/DesignAssetsLogosVertical";

export const Header = ({
  user,
  mode,
  dark,
  light,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className="wrapper">
      <img src={white_logo_color_background} />
      <div>CAMPAIGN</div>
      <div>CHARACTERS</div>
      <div>WORLDBUILDING</div>
      <div>BLOG</div>
      <div>DICE</div>
      <div>PURCHASE</div>
      <div>
        {mode ? (
          <>
            <span className="dark" onClick={dark}>
              DARK
            </span>
          </>
        ) : (
          <>
            <span className="light" onClick={light}>
              LIGHT
            </span>
          </>
        )}
      </div>
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
  mode: PropTypes.any,
  light: PropTypes.any,
  dark: PropTypes.any,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
