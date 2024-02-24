import "../src/App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default App;
