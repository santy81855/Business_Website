"use client";
import styles from "./Nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const path = usePathname();
    console.log(path);

    return (
        <nav className={styles.navContainer}>
            <section className={styles.textContainer}>
                <div className={styles.navItem}>
                    <Link href="/">
                        <p className={styles.companyName}>S&P</p>
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link href="/">
                        <p
                            className={`${styles.navLink} ${
                                path.length === 1
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            Home
                        </p>
                    </Link>
                    <Link href="/works">
                        <p
                            className={`${styles.navLink} ${
                                path.includes("works")
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            Works
                        </p>
                    </Link>
                    <Link href="/about">
                        <p
                            className={`${styles.navLink} ${
                                path.includes("about")
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            About
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p
                            className={`${styles.navLink} ${
                                path.includes("contact")
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            Contact
                        </p>
                    </Link>
                    <Link href="/" className={styles.navButton}>
                        <p>Lets meet!</p>
                    </Link>
                </div>
            </section>
        </nav>
    );
};

export default Nav;
