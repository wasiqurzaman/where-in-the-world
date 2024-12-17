import { createContext, useContext, useEffect, useState } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

function DarkModeProvider({ children }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode");
  }, [isDarkMode]);

  console.log(isDarkMode);

  function toggleDarkMode() {
    setIsDarkMode(isDark => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext was used outside DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
