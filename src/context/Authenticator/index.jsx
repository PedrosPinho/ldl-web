import React, { useState, createContext, useEffect } from "react";
import { Fdb } from "../../config/firebase";

import Spinner from "../../components/Spinner";

export const Context = createContext();

export const Authenticator = ({ children }) => {
  const [currentVersion, setCurrentVersion] = useState(null);
  const [loading, setLoading] = useState(!true);

  useEffect(() => {
    if (!currentVersion) {
      setLoading(true);
      Fdb.ref('/current_version').once('value').then((snapshot) => {
        setCurrentVersion(snapshot.val() || "");
        setLoading();
      });
    }
  }, [currentVersion]);

  return loading ? (
    <Spinner />
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
