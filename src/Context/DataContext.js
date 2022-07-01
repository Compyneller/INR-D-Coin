import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
export const Data = createContext();
const DataContext = ({ children }) => {
  const [inrd, setInrd] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/inrd/gethomepage"
      );
      setInrd(data);
    };
    fetchData();
  }, []);

  return <Data.Provider value={{ inrd }}>{children}</Data.Provider>;
};

export default DataContext;
