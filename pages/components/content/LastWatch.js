import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import data from '../../data/data';

function LastWatch(props) {
  const [movies, setMovies] = useState(data.data);
  const submovie = [];  

  useEffect(()=>{
    console.log("LastWatch movies: " , movies)
  },[])

  props.movies.map((movie) => {
    if (movie.Movie_ID > 2) {
      submovie.push(movie)
    }
  })

  return (
    <>
      {/*lastwatch start here*/}
      <div className={styles.content}>
        <div className={styles.content_header}>
          <div className={styles.content_title}>
            <p>New Releases</p>
          </div>
          <div className={styles.content_subtitle}>View More</div>
        </div>

        <div className={styles.content_main_row}>
          <div key={props.movies[0].Movie_ID} className={styles.content_main_row_card}>
            <div className={styles.card_label}>
              <p>{props.movies[0].Genre}</p>
            </div>

            <div className={styles.main_card_detail}>
              <div className={styles.content_icon}>
                <i class="material-symbols-outlined">schedule</i>
                <p style={{ margin: "5px" }}>{props.movies[0].Duration}</p>
              </div>

              <div className={styles.content_icon}>
                <i class="material-symbols-outlined">visibility</i>
                <p style={{ margin: "5px" }}>{props.movies[0].Views} views</p>
              </div>
            </div>

            <div className={styles.main_card_title}>
              <p>{props.movies[0].Title}</p>
            </div>
          </div>

          <div key={props.movies[1].Movie_ID} className={styles.content_main_row_card}>
            <div className={styles.card_label}>
              <p>{props.movies[1].Genre}</p>
            </div>

            <div className={styles.card_detail}>
              <div className={styles.content_icon}>
                <i class="material-symbols-outlined">schedule</i>
                <p style={{ margin: "5px" }}>{props.movies[1].Duration}</p>
              </div>

              <div className={styles.content_icon}>
                <i class="material-symbols-outlined">visibility</i>
                <p style={{ margin: "5px" }}>{props.movies[1].Views} views</p>
              </div>
            </div>

            <div className={styles.main_card_title}>
              <p>{props.movies[1].Title}</p>
            </div>
          </div>
        </div>

        <div className={styles.content_row}>
          {submovie.map(movie => {
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
      {/*lastwatch end here*/}
    </>
  );
}

export default LastWatch;
