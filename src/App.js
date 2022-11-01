import React from "react";
import { Route, Routes } from "react-router-dom";
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import { SidebarModule } from "./modules/Sidebar";

function App() {
  return (
    <>
      <SidebarModule/>
      <Routes>
        <Route element={<A/>} path="/a"/>
        <Route element={<B/>} path="/b"/>
        <Route element={<C/>} path="/c"/>
      </Routes>
    </>
    
  );
}

export default App;
