import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinCard from "../components/coins/CoinCard";
import CoinContext from "../contexts/CoinContext";
import { getTickerById } from "../services/CoinService";

function CoinsShow() {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    getTickerById(id)
      .then((resp) => setCoin(resp.data[0]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <CoinContext.Provider value={{ coin }}>
        <CoinCard />
      </CoinContext.Provider>
    </>
  );
}

export default CoinsShow;
