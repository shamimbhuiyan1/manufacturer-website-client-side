import { useEffect, useState } from "react";

const useToolsDetail = (inventoryId) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`tools.json/tool/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [inventoryId]);
  return [detail, setDetail];
};

export default useToolsDetail;
