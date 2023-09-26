import React, { useContext } from "react";
import CoinContext from "../../contexts/CoinContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CoinList() {
  const { coins } = useContext(CoinContext);
  return (
    <>
      <div className="grid">
        <div className="col-12">
          <h1>list of Coins</h1>
        </div>
      </div>
      <div className="grid">
        <div className="col-12 mx-2">
          <div className="card">
            <DataTable value={coins} tableStyle={{ minWidth: "50rem" }}>
              <Column field="rank" header="Rank"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="price_usd" header="Price"></Column>
              <Column field="percent_change_24h" header="Percent_24"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinList;
