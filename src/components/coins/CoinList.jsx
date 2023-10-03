import React, { useContext } from "react";
import CoinContext from "../../contexts/CoinContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { NavLink } from "react-router-dom";

function CoinList() {
  const { coins } = useContext(CoinContext);
  return (
    <>
      <div className="grid">
        <div className="col-12">
          <h1 className="text-primary">list of Coins</h1>
        </div>
      </div>
      <div className="grid">
        <div className="col-12 mx-2">
          <div className="card">
            <DataTable
              value={coins}
              tableStyle={{ minWidth: "50rem" }}
              paginator
              showGridlines
              rows={25}
              dataKey="id"
              emptyMessage="No coins found."
            >
              <Column field="rank" header="Rank"></Column>
              <Column
                field="symbol"
                header="Symbol"
                filter
                filterPlaceholder="Filter by Symbol"
                body={(rowData) => (
                  <NavLink
                    to={`/coins/${rowData.id}`}
                    // className="b-blue"
                    // activeClassName="active"
                  >
                    {rowData.symbol}
                  </NavLink>
                )}
              ></Column>
              <Column
                field="name"
                header="Name"
                filter
                filterPlaceholder="Filter by Name"
              ></Column>
              <Column
                field="price_usd"
                header="Price(USD)"
                dataType="numeric"
                style={{ minWidth: "10rem" }}
                filter
                filterPlaceholder="Filter by Price"
              ></Column>
              <Column
                field="percent_change_1h"
                header="1h%Change"
                dataType="numeric"
                style={{ minWidth: "10rem" }}
                filter
                filterPlaceholder="Filter by 1h Change"
              ></Column>
              <Column
                field="percent_change_24h"
                header="24h%Change"
                dataType="numeric"
                style={{ minWidth: "10rem" }}
                filter
                filterPlaceholder="Filter by 24h Change"
              ></Column>
              <Column
                field="percent_change_7d"
                header="7d%Change"
                dataType="numeric"
                style={{ minWidth: "10rem" }}
                filter
                filterPlaceholder="Filter by 7d Change"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinList;
