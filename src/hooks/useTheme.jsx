import { createContext, useContext, useState, useEffect } from "react";
const Ctx = createContext();
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  return <Ctx.Provider value={{ dark, setDark }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);
