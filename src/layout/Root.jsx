import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// eslint-disable-next-line react/prop-types
const Root = () => {
  return (
    <div className="page-wraper" id="scroll-container">
      <Header />
      <div className="page-content bg-light">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
