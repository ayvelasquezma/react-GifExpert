import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="animate__animated animate__bounce animate__faster">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
