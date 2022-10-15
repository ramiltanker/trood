import Reac from "react";
import "./Filter.scss";
import { FilterItem } from "../FilterItem/FilterItem";
interface FilterProps<Select> {}

const filters = [
  {
    id: 0,
    name: "Project",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
  {
    id: 1,
    name: "Token type",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
  {
    id: 3,
    name: "Conditions",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
  {
    id: 4,
    name: "Volume",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
  {
    id: 5,
    name: "ROI",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
  {
    id: 6,
    name: "Free float",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
  {
    id: 7,
    name: "Insurance hedge",
    selectData: [],
    sorting: false,
    sort_by_name: false,
  },
];

const Filter = () => {
  return (
    <>
      {filters.map(({ id, name, selectData, sort_by_name, sorting }) => {
        return (
          <th key={id} className="filter__th">
            <FilterItem<any> name={name}></FilterItem>
          </th>
        );
      })}
    </>
  );
};

export { Filter };
