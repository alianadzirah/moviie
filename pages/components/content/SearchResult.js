import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import fetch from "isomorphic-unfetch";
import data from "../../data/data.json"

function LastWatch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(data.data);
    setMovies(data.data);
    // fetch('')
    //   .then(response => response.json())
    //   .then(data => setMovies(data.data))
    //   .catch(error => console.log(error));
  }, []);

  return (
    <>
      {/*searchresult start here*/}
      <div className={styles.content}>
        <div className={styles.content_header}>
          <div className={styles.content_title}>
            <p>Search Results</p>
          </div>

          <div className={styles.content_subtitle}></div>
        </div>

        <div className={styles.content_row_result}>
          {movies.map(movie => {
            return (
              <div key={movie.Movie_ID} className={styles.content_row_card}>
                <div className={styles.card_label}>
                  <p>{movie.Genre}</p>
                </div>

                <div className={styles.card_detail}>
                  <div className={styles.content_icon}>
                    <i class="material-symbols-outlined">schedule</i>
                    <p style={{ margin: "5px" }}>{movie.Duration}</p>
                  </div>

                  <div className={styles.content_icon}>
                    <i class="material-symbols-outlined">visibility</i>
                    <p style={{ margin: "5px" }}>{movie.Views} views</p>
                  </div>
                </div>

                <div className={styles.card_title}>
                  <p>{movie.Title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*searchresult end here*/}
    </>
  );
}

export default LastWatch;
