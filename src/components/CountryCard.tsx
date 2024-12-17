import styles from "./CountryCard.module.css";
import { CountryType } from "../pages/Homepage";
import { Link } from "react-router-dom";

type CountryCardProps = {
  country: CountryType;
};

function CountryCard({ country }: CountryCardProps) {
  return (
    <Link to={`countries/${country.alpha3Code}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img
            src={country.flags.png}
            alt={`flag of ${country.name}`}
            className={styles.imgFlag}
          />
        </div>
        <div className={styles.detailsBox}>
          <h3 className={styles.name}>{country.name}</h3>
          <div className={styles.infoBox}>
            <div className={styles.box}>
              <span className={styles.label}>Population:</span>
              <span className={styles.value}>{country.population}</span>
            </div>
            <div className={styles.box}>
              <span className={styles.label}>Region:</span>
              <span className={styles.value}>{country.region}</span>
            </div>
            <div className={styles.box}>
              <span className={styles.label}>Capital:</span>
              <span className={styles.value}>{country.capital}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
