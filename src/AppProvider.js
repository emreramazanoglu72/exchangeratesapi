import { createContext, useEffect, useState } from "react";
import generateJson from "./service";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [jsonList, setJSONList] = useState([]);
  const state = { jsonList, setJSONList };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const data = generateJson();
    setTimeout(() => {
      setJSONList(data);
    }, 500);
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
