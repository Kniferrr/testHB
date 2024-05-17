import { useState, useEffect } from "react";
import { GetShoppingCartHeader } from "../api/GetShoppingCartHeader";

const useCachedGuid = () => {
  const [guid, setGuid] = useState<string>("");

  useEffect(() => {
    const cachedGuid = localStorage.getItem("UsedGuid");

    if (cachedGuid) {
      setGuid(cachedGuid);
    } else {
      GetShoppingCartHeader().then((data) => {
        localStorage.setItem("UsedGuid", data.UsedGuid);
        setGuid(data.UsedGuid);
      });
    }
  }, []);

  return guid;
};

export default useCachedGuid;
