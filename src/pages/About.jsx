import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
function About() {
  return (
    <>
      <div className="surface-0 text-700 text-center mx-auto">
        <div className="text-900 font-bold text-5xl mb-3 text-primary">
          About US
        </div>
        <div className="text-700 text-2xl mb-5">
          CoinsCanvas is a platform that provides information about various
          cryptocurrencies, including their market data, charts, and other
          relevant information.
        </div>
        <TabView>
          <TabPanel header="Our Mission">
            <div className="text-700 mb-6">
              Our goal is to empower users with the knowledge they need to make
              informed decisions in the world of cryptocurrency trading and
              investment.
            </div>
          </TabPanel>
          <TabPanel header="Who We Are">
            <div className="text-700">
              Whether you're a beginner looking to learn more about
              cryptocurrencies or an experienced trader seeking real-time market
              data, CoinsCanvas has you covered.
            </div>
          </TabPanel>
        </TabView>
        <div className="text-blue-600 font-bold mb-3">
          <i className="pi pi-bitcoin"></i>&nbsp;POWERED BY CoinsCanvas
        </div>
      </div>
    </>
  );
}

export default About;
