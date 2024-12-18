import styles from "./CountryPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import countryData from "../data/data.json";
import { useEffect, useState } from "react";

import { type CountryType } from "./Homepage";
import { FaArrowLeftLong } from "react-icons/fa6";
import BorderCountries from "../components/BorderCountries";

function CountryPage() {
  const [country, setCountry] = useState<CountryType>();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundCountry = countryData.find(
      c => c.alpha3Code.toLowerCase() === params.countryCode?.toLowerCase()
    );

    const country: CountryType = {
      name: foundCountry?.name,
      population: foundCountry?.population,
      capital: foundCountry?.capital,
      region: foundCountry?.region,
      subRegion: foundCountry?.subregion,
      flags: foundCountry?.flags,
      alpha3Code: foundCountry?.alpha3Code,
      nativeName: foundCountry?.nativeName,
      languages: foundCountry?.languages,
      currencies: foundCountry?.currencies,
      topLevelDomain: foundCountry?.topLevelDomain,
      borders: foundCountry?.borders,
    };
    setCountry(country);
  }, [params.countryCode]);

  console.log(params.countryCode);
  console.log(country);

  if (!country) return null;

  const findBorderCountries = () => {
    return country.borders?.map(b => {
      const found = countryData.find(c => c.alpha3Code === b);
      return { name: found?.name, alpha3Code: found?.alpha3Code };
    });
  };

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>
        <FaArrowLeftLong size={16} />
        Back
      </button>
      <div className={styles.countryContainer}>
        <div className={styles.flagContainer}>
          <img
            src={country?.flags.svg}
            alt={`flag of ${country?.name}`}
            className={styles.flag}
          />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>{country.name}</h1>
          <div className={styles.details}>
            <div className={styles.detailsRow}>
              <p className={styles.label}>
                Native Name:{" "}
                <span className={styles.value}>{country.nativeName}</span>
              </p>
              <p className={styles.label}>
                Population:{" "}
                <span className={styles.value}>
                  {numberWithCommas(country.population)}
                </span>
              </p>
              <p className={styles.label}>
                Region: <span className={styles.value}>{country.region}</span>
              </p>
              <p className={styles.label}>
                Sub Region:{" "}
                <span className={styles.value}>{country.subRegion}</span>
              </p>
              <p className={styles.label}>
                Capital: <span className={styles.value}>{country.capital}</span>{" "}
              </p>
            </div>
            <div>
              <p className={styles.label}>
                Top Level Domain:{" "}
                <span className={styles.value}>
                  {country.topLevelDomain.join(", ")}
                </span>
              </p>
              <p className={styles.label}>
                Currenties:{" "}
                <span className={styles.value}>
                  {country.currencies?.map(c => c.name).join(", ")}
                </span>
              </p>
              <p className={styles.label}>
                Languages:{" "}
                <span className={styles.value}>
                  {country.languages?.map(l => l.name).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.borderContainer}>
            <span className={styles.label}>Border Countries: </span>
            <BorderCountries countries={findBorderCountries()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
