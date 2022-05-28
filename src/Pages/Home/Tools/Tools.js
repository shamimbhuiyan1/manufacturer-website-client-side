import React from "react";
import useTools from "../../../hooks/useTools";

import ToolsInfo from "../ToolsInfo/ToolsInfo";

const Tools = () => {
  const [tools, setTools] = useTools();

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-primary my-6">
        Our Products
      </h2>
      <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <ToolsInfo key={tool.id} tool={tool}></ToolsInfo>
        ))}
      </div>
    </div>
  );
};

export default Tools;
