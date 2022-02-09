import React from "react";
import Gif from "./Gif";
import Loading from "./Loading";
function Grid({ Trending, Loadstate }) {
  // if (Trending === []) return <div>Sorry but No such Results Found</div>;
  if (Loadstate === true) {
    return <Loading></Loading>;
  }

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
