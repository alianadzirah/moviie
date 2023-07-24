import React, { Component, useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Hero from "./components/Hero";
import HeroSearch from "./components/HeroSearch";
import HeroSearchDetail from "./components/HeroSearchDetail";
import SearchResult from "./components/content/SearchResult";
import LastWatch from "./components/content/LastWatch";
import data from './data/data'

export default function Home(props) {
  const [search, setSearch] = useState(0);
  const [watch, setWatch] = useState(0);
  const [movies, setMovies] = useState();

  useEffect(() => {
    setMovies(data.data);
    console.log("data.data: ", data.data);
    console.log("movies: " + movies)
    // async function getData() {
    //   const data = await fetch('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=ABC movies&time_start=2020-04-04 00:00:00&time_end=2020-04-05 00:00:00') 
    //   .then(response => response.json())
    //   .then(data => setMovies(data.data))
    //   .catch(error => console.log("ADA ERROR", error));
    // } 
    // getData();
  }, []);  

console.log("hoi", movies);
  const searchHandler = () => {
    setSearch(1);
    console.log("search" + search);
  };

  const homeHandler = () => {
    setSearch(0);
    setWatch(0);
    console.log("search" + search);
  };

  return (
    <>
      {/* use head and add meta tag in head component  */}
      <Head>
        <title>Moviie</title>
        <link rel="shortcut icon" href="assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        {/* bootstrap */}
        <script src="js/bootstrap.bundle.min.js"></script>
      </Head>
      {/* use layout and add other ui component  */}

      <div>
        {/* header start here */}
        <div className={styles.header}>
          <p className={styles.header_logo}>Moviie</p>
          <div className={styles.header_tab}>
            <p onClick={homeHandler} className={styles.header_tab_label}>
              Home
            </p>
            <p className={styles.header_tab_label}>Movies</p>
            <p className={styles.header_tab_label}>TV Show</p>
            <p className={styles.header_tab_label}>Video</p>
            <p className={styles.header_tab_label}>FAQ</p>
            <p className={styles.header_tab_label}>Pricing</p>
            <p className={styles.header_tab_label}>Contact Us</p>
          </div>

          <div className={styles.header_profile}>
            <div className={styles.content_icon}>
              <button className={styles.header_search_icon} onClick={searchHandler}>
                <i class="material-symbols-outlined">search</i>
              </button>

              <p style={{ margin: "15px" }}></p>
              <i class="material-symbols-outlined">
                <span class="material-symbols-outlined">account_circle</span>
              </i>
              <p className={styles.header_profile_name}>John Glich</p>
            </div>
          </div>
        </div>
        {/* header end here */}

        {/*search hero start here*/}
        <div className={styles.search}>
          <div className={styles.search_content}>
            <div className={styles.hero_logo}>
              <img src="assets/moviie.png"></img>
            </div>

            <div>
              {search === 0 ? (
                <Hero />
              ) : search === 1 ? (
                <HeroSearch setWatch={setWatch}/>
              ) : (
                <HeroSearchDetail />
              )}
            </div>

          </div>
        </div>
        {/*search end here*/}

        {/* content start here */}
        <div>
          {watch === 0 ? (
            <LastWatch movies={movies} />
          ) : watch === 1 ? (
            <SearchResult />
          ) : (
            <Hero />
          )}
        </div>
        {/* content end here */}

        {/* footer start here */}
        <div className={styles.footer}>
          <div className={styles.footer_section1}>
            <p className={styles.footer_sec1_title}>Moviie</p>
            <p className={styles.footer_sec1_content}>
              Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <p className={styles.footersec1_subtitle}>Join Newsletters</p>

            {/* email submit start here */}
            <div>
              <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
                <div className="px-6 py-4">
                  <form className="flex flex-col">
                    <div className={styles.email_form_base}>
                      <input
                        placeholder="Insert your mail here"
                        className={styles.form_input}
                        id="name"
                        name="name"
                        type="text"
                        autocomplete="name"
                        required
                      />
                      <button type="submit" className={styles.email_form_submit}>
                        <i class="material-symbols-outlined">
                          <span class="material-symbols-outlined">
                            arrow_forward
                          </span>
                        </i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* email submit end here */}
          </div>

          <div className={styles.footer_section2}>
            <div className={styles.footer_sec2_item}>
              <div>
                <p className={styles.footer_sec2_title}>Product</p>
                <p className={styles.footer_sec2_subtitle}>Movies</p>
                <p className={styles.footer_sec2_subtitle}>TV Show</p>
                <p className={styles.footer_sec2_subtitle}>Videos</p>
              </div>

              <div>
                <p className={styles.footer_sec2_title}>Media Group</p>
                <p className={styles.footer_sec2_subtitle}>Nice Studio</p>
                <p className={styles.footer_sec2_subtitle}>Nice News</p>
                <p className={styles.footer_sec2_subtitle}>Nice TV</p>
              </div>

              <div>
                <p className={styles.footer_sec2_title}>Sitemap</p>
                <p className={styles.footer_sec2_subtitle}>About</p>
                <p className={styles.footer_sec2_subtitle}>Careers</p>
                <p className={styles.footer_sec2_subtitle}>Press</p>
              </div>
            </div>

            {/* studio info start here */}
            <div className={styles.footer_sec2_studioinfo}>
              <div>
                <div className={styles.studio_info}>
                  <i class="material-symbols-outlined">
                    <span class="material-symbols-outlined">location_on</span>
                  </i>
                  <p style={{ margin: "2%" }}>
                    8819 Ohio St. South Gate, California 90280
                  </p>
                </div>
              </div>

              <div>
                <div className={styles.studio_info}>
                  <i class="material-symbols-outlined">
                    <span class="material-symbols-outlined">mail</span>
                  </i>
                  <p style={{ margin: "2%" }}>ourstudio@hello.com</p>
                </div>
              </div>

              <div>
                <div className={styles.studio_info}>
                  <i class="material-symbols-outlined">
                    <span class="material-symbols-outlined">call</span>
                  </i>
                  <p style={{ margin: "2%" }}>+271 386-647-3637</p>
                </div>
              </div>
            </div>
            {/* studio info end here */}
          </div>
        </div>
        {/* footer end here */}
      </div>
    </>
  );
}
