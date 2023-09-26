import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

function MasterPage() {
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MasterPage;
