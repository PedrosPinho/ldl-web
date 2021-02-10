import React, { useState, createContext } from "react";

import Spinner from "../../components/Spinner"

export const Context = createContext();

export const Authenticator = ({ children }) => {
  const [currentVersion, setCurrentVersion] = useState("2021.1");
  const [loading] = useState(!true);

  return loading ? (
    <Spinner/>
  ) : (
    <Context.Provider
      value={{
        currentVersion,
        setCurrentVersion,
      }}
    >
      {children}
    </Context.Provider>
  );
};
