import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext(null);

export const useContextProvider = () => {
  return useContext(MyContext);
};

const MyContextProvider = ({ children }) => {
  const value = {};

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
