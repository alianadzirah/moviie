import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import HeroSearchDetail from "./HeroSearchDetail";

const HeroSearch = props => {
  const d = new Date();

  const [date, setDate] = useState(0);
  // const [watch, setWatch] = useState(0);
 
  const dateHandler = () => {
    setDate(1);
    console.log("date" + date);
  };

  const watchHandler = () => {
    props.setWatch(1);
    console.log("watching");
  }

  return (
    <>
      {/*search start here*/}

      <div className={styles.hero_search}>
        <p className={styles.search_title}>Search your movies here!</p>

        <div className={styles.hero_subtitle}>
          {date === 0 ? (
            <div>
              <div className={styles.search_content}>
                <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
                  <div className="px-6 py-4">
                    <form className="flex flex-col">
                      <div className={styles.search_form_base}>
                        <i class="material-symbols-outlined">
                          <span class="material-symbols-outlined">search</span>
                        </i>
                        <input
                          placeholder="Search by theatre...."
                          className={styles.form_input}
                          id="name"
                          name="name"
                          type="text"
                          autocomplete="name"
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
                  <div className="px-6 py-4">
                    <form className="flex flex-col">
                      <div
                        className={styles.calendar_button}
                        onClick={dateHandler}
                      >
                        <i class="material-symbols-outlined">
                          <span class="material-symbols-outlined">
                            calendar_month
                          </span>
                        </i>
                        <p>
                          {d.getDate() +
                            "/" +
                            d.getMonth() +
                            "/" +
                            d.getFullYear()}
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : date === 1 ? (
            <HeroSearchDetail />
          ) : (
            <Hero />
          )}

          <button type="submit" className={styles.search_form_submit} onClick={watchHandler}>
            Search
          </button>
        </div>
      </div>

      {/*search end here*/}
    </>
  );
}

export default HeroSearch;
