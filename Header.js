import React from "react";
import { Link } from "react-router-dom";
function Header({ push, Logomessage }) {
  const stickerRoute = () => {
    push(`/stickers/trending`);
  };
  const AppRoute = () => {
    push(`/`);
  };
  return (
    <div className="Header">
      <h2 className="logo-control">{Logomessage} searcher</h2>
      <nav className="Nav">
        <a onClick={() => stickerRoute()}>Stickers</a>
        <a onClick={() => AppRoute()}>Gifs</a>
      </nav>
    </div>
  );
}
export default Header;
