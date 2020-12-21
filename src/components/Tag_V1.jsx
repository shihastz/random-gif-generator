import React, { useState } from "react";
import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, fetchGif } = useGif(tag);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      {gif ? <img src={gif} alt="random" /> : ""}
      <input
        className="tag__input"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={handleClick}>Generate</button>
    </div>
  );
};

export default Tag;
