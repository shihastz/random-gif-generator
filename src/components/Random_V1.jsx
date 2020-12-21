import React from "react";
import useGif from "../useGif";

const Tag = () => {
  const { gif, fetchGif } = useGif("");

  const handleClick = () => {
    fetchGif("");
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      {gif ? <img src={gif} alt="random" /> : <h5>Generating...</h5>}
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Tag;
