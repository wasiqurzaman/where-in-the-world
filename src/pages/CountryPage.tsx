import styles from "./CountryPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import countryData from "../data/data.json";
import { useEffect, useState } from "react";

import { type CountryType } from "./Homepage";
import { FaArrowLeftLong } from "react-icons/fa6";

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
      const f = countryData.find(c => c.alpha3Code === b);
      return f?.name;
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
              <p>
                Population: <span>{numberWithCommas(country.population)}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subRegion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>{" "}
              </p>
            </div>
            <div>
              <p>
                Top Level Domain:{" "}
                <span>{country.topLevelDomain.join(", ")}</span>
              </p>
              <p>
                Currenties:{" "}
                <span>{country.currencies?.map(c => c.name).join(", ")}</span>
              </p>
              <p>
                Languages:{" "}
                <span>{country.languages?.map(l => l.name).join(", ")}</span>
              </p>
            </div>
          </div>
          <div className={styles.borderContainer}>
            <p>
              Border Countries:{" "}
              {findBorderCountries()
                ? findBorderCountries()?.join(", ")
                : "No border countries."}
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
