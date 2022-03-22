export const getDetailBlockOne = (country) => {
  return [
    {
      label: "Native Name",
      info: country.nativeName,
    },
    {
      label: "Population",
      info: country.population,
    },
    {
      label: "Region",
      info: country.region,
    },
    {
      label: "Sub Region",
      info: country.subregion,
    },
    {
      label: "Capital",
      info: country.capital,
    },
  ];
};

export const getDetailBlockTwo = (country) => {
  const languagesArr = country.languages.map((item) => {
    return item.name;
  });

  return [
    {
      label: "Top Level Domain",
      info: country.topLevelDomain[0],
    },
    {
      label: "Currencies",
      info: country.currencies ? country.currencies[0].name : "",
    },
    {
      label: "languages",
      info: languagesArr.join(", "),
    },
  ];
};
