import styles from "./page2.module.css";
import React from "react";
import logyt from "../../assets/yt.svg";
import loggit from "../../assets/git-1.svg"
import logemail from "../../assets/email.svg";
import loglink from "../../assets/link.svg";

export const Page2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container2}>
        <h3 className={styles.introduce}>introduce</h3>
        <h3 className={styles.about}>About me</h3>
      </div>
      <div className={styles.container3}>
        <div className={styles.foto}></div>
        <div className={styles.containerlog}>
          <div className={styles.log}>
            <img className={styles.logo} src={logyt} alt="" />
          </div>
          <div className={styles.log}>
            <img className={styles.logo} src={loggit} alt="" />
          </div>
          <div className={styles.log}>
            <img className={styles.logo} src={logemail} alt="" />
          </div>
          <div className={styles.log}>
            <img className={styles.logo} src={loglink} alt="" />
          </div>
          <div className={styles.log}>
            <p className={styles.cv} >cv</p>
          </div>
        </div>
      </div>
      <p className={styles.lore}>
        Lorem ipsum dolor sit amet consectetur , adipisicing elit. Explicabo
        iste fugia t minus non, ut fugit porro optio aperiam qu ia tempore ipsam
        commodi hic nam mollit ia adipisci similique placeat quasi ar chitecto.
      </p>
    </section>
  );
};
