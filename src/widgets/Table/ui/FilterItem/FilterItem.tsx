import React, { FC } from "react";
import "./FilterItem.scss";

interface FilterItemProps<SelectData> {
  select?: SelectData[];
  name: string;
}

const FilterItem = <SelectData,>(props: FilterItemProps<SelectData>) => {
  const { name } = props;

  return (
    <div className="filter-item">
      <p className="filter-item__name">{name}</p>
    </div>
  );
};

export { FilterItem };
