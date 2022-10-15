import React, { useState } from "react";
import "./Table.scss";
import { Filter } from "../Filter/Filter";
import data from "../../../../shared/mocks/table-data.json";
import { FilterType } from "../../../../app/types/table";

const Table = () => {
  const [options, setOptions] = useState<FilterType>({
    project: { status: "all", sort_by_name: "-" },
    token: "all",
    conditions: "all",
    volume: "ascending",
  });

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <Filter />
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              conditions,
              free,
              hedge,
              name,
              roi,
              status,
              type,
              volume,
            }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{conditions}</td>
                  <td>{volume}</td>
                  <td>{roi}</td>
                  <td>{free}</td>
                  <td>{hedge}</td>
                  <td>
                    <button>BUYx`</button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
