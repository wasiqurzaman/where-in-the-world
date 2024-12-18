import { Link } from "react-router-dom";
import styles from "./BorderCountries.module.css";

type BorderCountriesProps = {
  countries: { name: string; alpha3Code: string }[];
};

function BorderCountries({ countries }: BorderCountriesProps) {
  return (
    <div className={styles.borderCountries}>
      {countries ? (
        countries.map(country => (
          <Link
            to={`/countries/${country.alpha3Code}`}
            className={styles.borderCountry}
            key={country.name}
          >
            <span>{country.name}</span>
          </Link>
        ))
      ) : (
        <span>No Border countries.</span>
      )}
    </div>
  );
}

export default BorderCountries;
