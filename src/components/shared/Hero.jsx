import React from "react";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Welcome to CoinsCanvas
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              your website to discover the Future of Finance
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              Experience the power of digital currency and blockchain
              technology. Join us on a journey where financial transactions are
              faster, more secure, and accessible to everyone. Discover the
              future of finance with CoinsCanvas
            </p>
            <NavLink to="/coins" className="b-blue">
              <Button
                label="Explore Cryptocurrencies"
                type="button"
                className="mr-3 p-button-raised"
              ></Button>
            </NavLink>
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src="/Crypo_picture2.jpg"
            alt="hero-1"
            style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
