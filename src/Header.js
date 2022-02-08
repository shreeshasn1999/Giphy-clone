import React from "react";
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
        <button onClick={stickerRoute}>Stickers</button>
        <button onClick={AppRoute}>Gifs</button>
      </nav>
    </div>
  );
}
export default Header;
