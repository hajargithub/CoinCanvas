import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { getGlobal } from "../services/GlobaleService";

function Global() {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    getGlobal()
      .then((resp) => setGlobalData(resp.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const items = [
    {
      label: (
        <>
          Cryptocurrencies:{" "}
          <strong>
            <NavLink to="/coins" className="b-blue">
              {globalData.coins_count}
            </NavLink>
          </strong>
        </>
      ),
    },
    {
      label: (
        <>
          Markets:{" "}
          <strong>
            <span className="b-black">
              {globalData.active_markets !== undefined
                ? globalData.active_markets
                : "N/A"}
            </span>
          </strong>
        </>
      ),
    },
    {
      label: (
        <>
          Market Cap:{" "}
          <strong>
            <span className="b-black">
              {globalData.total_mcap !== undefined
                ? `$${globalData.total_mcap.toFixed(2)}`
                : "N/A"}
            </span>
          </strong>
        </>
      ),
    },
    {
      label: (
        <>
          24h Vol:{" "}
          <strong>
            <span className="b-black">
              {globalData.total_volume !== undefined
                ? `$${globalData.total_volume.toFixed(2)}`
                : "N/A"}
            </span>
          </strong>
        </>
      ),
    },
    {
      label: (
        <>
          BTC Dominance:{" "}
          <strong>
            <span className="b-black">
              {globalData.btc_d !== undefined ? `${globalData.btc_d}%` : "N/A"}
            </span>
          </strong>
        </>
      ),
    },
  ];

  return <Menubar model={items} style={{ height: "40px" }} />;
}

export default Global;
