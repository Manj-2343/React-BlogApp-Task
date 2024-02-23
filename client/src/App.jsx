import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>NavBar</div>
      <Outlet/>
    </>
  );
};

export default App;
