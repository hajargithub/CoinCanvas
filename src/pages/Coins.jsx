import React, { useEffect, useState } from "react";
import CoinList from "../components/coins/CoinList";
import CoinContext from "../contexts/CoinContext";
import { get100FirstTickers } from "../services/CoinService";

function Coins() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    get100FirstTickers()
      .then(({ data }) => setCoins(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CoinContext.Provider value={{ coins }}>
        <CoinList />
      </CoinContext.Provider>
    </>
  );
}

export default Coins;
