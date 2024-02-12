import { Page1 } from "../page-1";
import { Page2 } from "../page-2";
import styles from "./home.module.css"
import React from 'react';



export const Home = () => {
   

    return(
        <section className={styles.container}>
            <Page1/>
            <Page2/>
        </section>
    )
}