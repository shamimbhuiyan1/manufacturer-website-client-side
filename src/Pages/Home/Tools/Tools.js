import React from "react";
import useTools from "../../../hooks/useTools";

const Tools = () => {
  const [tools] = useTools();
  return (
    <div>
      <h2>Our Car Tools</h2>
      <div></div>
    </div>
  );
};

export default Tools;
