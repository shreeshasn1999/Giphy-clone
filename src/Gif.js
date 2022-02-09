import React from "react";
function Gif(image, key) {
  const Image = image;
  // console.log(Image);
  return (
    <div className="Gif">
      <img src={Image.Image} className="img"></img>
    </div>
  );
}
export default Gif;
