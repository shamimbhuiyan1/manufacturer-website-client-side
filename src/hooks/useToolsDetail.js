import { useEffect, useState } from "react";

const useToolsDetail = (inventoryId) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://tranquil-mountain-12597.herokuapp.com/tool/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [inventoryId]);
  return [detail, setDetail];
};

export default useToolsDetail;
