import React from "react";
import {
  CancleIconHolder,
  SearchForm,
  SearchIconHolder,
  SearchInput,
} from "./styled";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import CancelIcon from "../../assets/xmark-solid.svg";
import { IconContainer } from "../../layouts/Share";

const Search = ({
  setSearchInput,
  searchInput,
  setFilteredCountries,
  countries,
}) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <SearchIconHolder>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </SearchIconHolder>

      <SearchInput
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleChange}
      />

      <CancleIconHolder>
        <IconContainer size="12px">
          <CancelIcon
            style={{ display: searchInput ? "inline-block" : "none" }}
            onClick={() => setSearchInput("")}
          />
        </IconContainer>
      </CancleIconHolder>
    </SearchForm>
  );
};

export default Search;
