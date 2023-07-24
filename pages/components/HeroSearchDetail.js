import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import DatePicker from "react-datepicker";

function HeroSearchDetail() {
  const d = new Date();

  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <>
      {/*search start here*/}
      <div>
        <div className={styles.search_content}>
          <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
            <div className="px-6 py-4">
              <form className="flex flex-col">
                <div className={styles.theatre_form_base}>
                  <i class="material-symbols-outlined">
                    <span class="material-symbols-outlined">search</span>
                  </i>
                  <input
                    placeholder="Theatre name...."
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
        </div>

        <div className={styles.search_content}>
          <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
            <div className="px-6 py-4">
              <form className="flex flex-col">
              <div className={styles.calendar_button_find}>
                  <i class="material-symbols-outlined">
                    <span class="material-symbols-outlined">
                      calendar_month
                    </span>
                  </i>
                  <input type="datetime-local" className={styles.date_input}></input>
                </div>
              </form>
            </div>
          </div>

          <div style={{ width: "3%" }}>
            <p></p>
          </div>

          <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
            <div className="px-6 py-4">
              <form className="flex flex-col">
                <div className={styles.calendar_button_find}>
                  <i class="material-symbols-outlined">
                    <span class="material-symbols-outlined">
                      calendar_month
                    </span>
                  </i>
                  <input type="datetime-local" className={styles.date_input}></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*search end here*/}
    </>
  );
}

export default HeroSearchDetail;
