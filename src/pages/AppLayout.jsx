import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
