import React, { useState } from "react";
import { IconContainer } from "../../layouts/Share";
import { FilterEl, FilterField, FilterList, FilterOption } from "./styled";
import CaretUp from "../../assets/caret-up-solid.svg";
import CaretDown from "../../assets/caret-down-solid.svg";

const Filter = ({ setOption }) => {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("Filter by Region");

  const handleOptionSelect = (e) => {
    if (e.target.textContent === "All") {
      setLabel("Filter by Region");
      setOption("All");
    } else {
      setLabel(e.target.textContent);
      setOption(e.target.textContent);
    }
    setActive((prev) => !prev);
  };
  return (
    <FilterEl>
      <FilterField onClick={() => setActive((prev) => !prev)}>
        <p>{label}</p>

        <IconContainer size="12px" style={{ paddingBottom: "4px" }}>
          {active ? <CaretUp /> : <CaretDown />}
        </IconContainer>
      </FilterField>

      <FilterList
        className={`${active ? "" : "hide"}`}
        onClick={handleOptionSelect}
      >
        {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
          (item) => (
            <FilterOption key={item}>{item}</FilterOption>
          )
        )}
      </FilterList>
    </FilterEl>
  );
};

export default Filter;
