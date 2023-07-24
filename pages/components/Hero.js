import React from "react";
import styles from "../../styles/Home.module.css";

function Hero() {
  return (
    <>
      {/*search start here*/}
          <div className={styles.hero_search}>
            <p className={styles.hero_title}>Find your movies here!</p>
            <p className={styles.hero_subtitle}>
              Explore our gallery full of exciting films from all around the
              globe only your yor entertainments. No hidden charges or
              disturbing ads.
            </p>
          </div>
      {/*search end here*/}
    </>
  );
}

export default Hero;
