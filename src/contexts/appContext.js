import React, { createContext, useState } from "react";

export const AppContext = createContext();

// const getInitialTheme = () => {
//   if (typeof window !== "undefined" && window.localStorage) {
//     const storedPrefs = window.localStorage.getItem("REST_color-theme-v3");

//     if (typeof storedPrefs === "string") {
//       return JSON.parse(storedPrefs);
//     }

//     const userMedia = window.matchMedia("(prefers-color-scheme:dark)");

//     if (userMedia.matches) {
//       return true;
//     }

//     return false; // light theme as the default
//   }
// };

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
