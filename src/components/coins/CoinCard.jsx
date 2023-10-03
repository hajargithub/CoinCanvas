import React, { useContext } from "react";
import CoinContext from "../../contexts/CoinContext";
import { DataView } from "primereact/dataview";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

function CoinCard() {
  const { coin } = useContext(CoinContext);

  // Define your template for each coin item
  const itemTemplate = (coinData, layout) => {
    if (!coinData) {
      return null;
    }

    return (
      <div className="col-12">
        <Card title={`${coinData.name}(${coinData.symbol})`}>
          <div className="grid">
            <div className="col-12 text-center">
              Price (USD):
              <strong>${coinData.price_usd}</strong>
            </div>
            <div className="col-12 text-center">
              <strong className="text-primary text-center">
                (${coinData.percent_change_24h})
              </strong>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="grid">
      <div className="col-3">
        <DataView value={[coin]} itemTemplate={itemTemplate} layout="list" />
      </div>
      <div className="col-9">
        <DataTable value={[coin]} style={{ marginTop: "2rem" }}>
          <Column field="symbol" header="Symbol" />
          <Column field="rank" header="Rank" />
          <Column field="price_usd" header="Price (USD)" />
          <Column field="percent_change_1h" header="1h Change (%)" />
          <Column field="percent_change_24h" header="24h Change (%)" />
          <Column field="percent_change_7d" header="7d Change (%)" />
        </DataTable>
      </div>
    </div>
  );
}

export default CoinCard;
