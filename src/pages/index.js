import Head from "next/head";

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { getAllCountries } from "../helpers/api-util";
import { Grid, NoResult, Section, SubMenu } from "../layouts/Share";

export default function Home({ countiesArr }) {
  const [countries, setCountries] = useState(countiesArr);
  const [searchInput, setSearchInput] = useState("");
  const [option, setOption] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState(countiesArr);

  useEffect(() => {
    if (option === "All" && searchInput === "") setFilteredCountries(countries);
    else if (option === "All" && searchInput !== "") {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else if (option !== "All" && searchInput === "") {
      setFilteredCountries(
        countries.filter((country) => country.region === option)
      );
    } else {
      setFilteredCountries(
        countries.filter((country) => {
          return (
            country.name.toLowerCase().includes(searchInput.toLowerCase()) &&
            country.region === option
          );
        })
      );
    }
  }, [countries, searchInput, option]);

  return (
    <>
      <Head>
        <title>HOME | REST Countries </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SubMenu>
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setFilteredCountries={setFilteredCountries}
          countries={countries}
        />

        <Filter setOption={setOption} />
      </SubMenu>

      <Section>
        <Grid>
          {filteredCountries.map((country) => (
            <Card key={country.alpha3Code} country={country} />
          ))}

          {filteredCountries.length === 0 && (
            <NoResult>No Result Found. Try Again!</NoResult>
          )}
        </Grid>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const countiesArr = await getAllCountries();

  return {
    props: {
      countiesArr,
    },
  };
}
