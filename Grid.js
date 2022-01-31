import React from "react";
import Gif from "./Gif";
function Grid(Gifs) {
  const Trending = Gifs.Trending;
  if (Trending == []) return <div>Sorry but No such Results Found</div>;
  return (
    <div className="Gif-Grid">
      {Object.keys(Trending).map((key) => {
        const image = Trending[key].images.fixed_height.url;
        return <Gif Image={image} key={key}></Gif>;
      })}
    </div>
  );
}
export default Grid;
