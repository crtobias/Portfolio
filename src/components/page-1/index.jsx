import styles from "./page1.module.css"
import React from 'react';



export const Page1 = () => {
   

    return(
        <section className={styles.container}>
            <div className={styles.container2}>
            <h1 className={styles.name}>Tobias Gonzalez</h1>
            <h2 className={styles.portfolio}>Portfolio</h2>
            </div>
            <div className={styles.dessof}>
                <h5 className={styles.developer}>Software developer</h5>
            </div>
            <div className={styles.containerbuttons}>
                <div className={styles.buttons}></div>
                <div className={styles.buttons}></div>
                <div className={styles.buttons}></div>
            </div>
        </section>
    )
}