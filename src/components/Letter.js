import React, { useState } from "react";

const Letter = ({ letter }) => {
  const [location, setLocation] = useState(true);

  let styles = {
    // transform: `translateX(${location ? 100 : 0}px)`,
    // transform: `translateY(${location ? 200 : 0}px)`,
    top: `${location ? 0 : -606}px`,
    left: `${location ? 0 : -305}px`,
  };

  return (
    <>
      <h1
        className="letter"
        style={styles}
        onClick={() => {
          setLocation(!location);
        }}
      >
        {letter}
      </h1>
    </>
  );
};

export default Letter;
