import styles from "./Homepage.module.css";
import { useEffect, useState } from "react";
import countriesData from "../data/data.json";
import CountryCard from "../components/CountryCard";
import RegionFilter from "../components/RegionFilter";
import SearchBox from "../components/SearchBox";

export type CountryType = {
  name: string;
  population: number;
  capital: string;
  region: string;
  subRegion: string;
  flags: {
    svg: string;
    png: string;
  };
  alpha3Code: string;
  nativeName: string;
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  currencies: { code: string; name: string; symbol: string }[];
  topLevelDomain: string[];
  borders: string[];
};

function Homepage() {
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  const [foundCountries, setFoundCountries] = useState(filteredCountries);

  useEffect(() => {
    setFoundCountries(filteredCountries);
  }, [filteredCountries]);

  const handleFilter = (filterText: string) => {
    console.log(filterText);
    if (!filterText) {
      setFilteredCountries(countriesData);
      return;
    }
    const filteredCountries = countriesData.filter(
      country => country.region.toLowerCase() === filterText.toLowerCase()
    );

    console.log(filteredCountries);

    setFilteredCountries(filteredCountries);
  };

  // console.log(filteredCountries);

  const handleSearch = (text: string) => {
    const countries = filteredCountries.filter(
      country =>
        country.alpha3Code.toLowerCase() === text.toLowerCase() ||
        country.altSpellings?.includes(text.toUpperCase()) ||
        country.name.toLowerCase().includes(text.toLowerCase())
    );
    // setFilteredCountries(countries);
    setFoundCountries(countries);
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.searchFilter}>
        <SearchBox onSearch={handleSearch} />
        <RegionFilter onFilter={handleFilter} />
      </div>
      <div className={styles.grid}>
        {foundCountries.map(country => (
          <CountryCard country={country} key={country.alpha3Code} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
