import React from "react";
import ExchangeList from "../components/exchanges/ExchangeList";
import ExchangeContext from "../contexts/ExchangeContext";

function Exchanges() {
  return (
    <>
      <ExchangeContext.Provider>
        <ExchangeList />
      </ExchangeContext.Provider>
    </>
  );
}

export default Exchanges;
