import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
    style?: React.CSSProperties;
};

const Footer = ({ style }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer} style={style}>
            <div className={styles.footerList}>
                <p className={styles.footerTitle}>© {currentYear} S & P</p>
                <p>Contact</p>
                <p>paula.garcia0714@gmail.com</p>
                <p>770-789-7623</p>
            </div>
        </footer>
    );
};

export default Footer;
