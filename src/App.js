import React from "react";
import { Route, Routes } from "react-router-dom";
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import { SidebarModule } from "./modules/Sidebar";
import { ThemeProvider } from "styled-components";
import { theme } from './theme/ColorTheme';
import { useRecoilState } from 'recoil';
import { darkModeAtom } from './recoil/data';
import { IconContext } from "react-icons/lib";

function App() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

  return (
    <ThemeProvider theme={darkMode ? theme.darkTheme : theme.lightTheme}>
      <IconContext.Provider 
        value={{
          color: `${darkMode ? theme.darkTheme.iconC : theme.lightTheme.iconC}`
        }}
      >
        <SidebarModule/>
        <Routes>
          <Route element={<A/>} path="/a"/>
          <Route element={<B/>} path="/b"/>
          <Route element={<C/>} path="/c"/>
        </Routes>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
