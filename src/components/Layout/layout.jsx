import Navbar from "@/components/LandingPage/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import styles from "./layout.module.css"
import PageHeader from "@/components/PageHeader/PageHeader";
import * as timers from "timers";

const Layout = ({ children, pageHeaderTittle }) => {
    return (
        <>
            <Navbar/>
            <PageHeader tittle={ pageHeaderTittle }/>
            <div className={styles.Layout}>
                <main>{ children }</main>
            </div>
            <Footer/>
        </>
    );
};

export default Layout