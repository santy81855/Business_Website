import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { penIcon, pageIcon, graphIcon, creativeIcon } from "@/lib/Icons";

/*
Header is the header of the landing page and it is a background image with a slightly transparent overlay and a centered title in white
*/
const Header = () => {
    return (
        <>
            <section className={styles.header}>
                <Image
                    className={styles.image}
                    src="/images/landing-page/landing-photo.jpg"
                    width={1600}
                    height={900}
                    alt="Landing page main picture."
                    quality={100}
                />
                <h1 className={styles.title}>
                    We Specialize in Strategy, Design & Marketing
                </h1>
                <section className={styles.overlay}></section>
            </section>
            <section className={styles.banner}>
                <div className={styles.bannerItem}>
                    {penIcon}
                    <p className={styles.itemText}>Branding</p>
                </div>
                <div className={styles.bannerItem2}>
                    {pageIcon}
                    <p className={styles.itemText}>Content</p>
                </div>
                <div className={styles.bannerItem}>
                    {graphIcon}
                    <p className={styles.itemText}>Strategy</p>
                </div>
                <div className={styles.bannerItem2}>
                    {creativeIcon}
                    <p className={styles.itemText}>Creative</p>
                </div>
            </section>
            <section className={styles.contactForm}>
                <section className={styles.titleContainer}>
                    <h2 className={styles.contactTitle}>Let&apos;s Meet!</h2>
                    <p className={styles.contactText}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font.
                    </p>
                    <Link href="/" className={styles.ctaButton}>
                        <p className={styles.contactLink}>Book Now</p>
                    </Link>
                </section>
                <Image
                    className={styles.collaborationImage}
                    src="/images/landing-page/landing-photo-collaboration.jpg"
                    width={1600}
                    height={900}
                    alt="Picture of collaboration."
                    quality={100}
                />
            </section>
            <section className={styles.pitchSection}>
                <section className={styles.pitchTitleContainer}>
                    <h2 className={styles.pitchTitle}>Work with Us</h2>
                    <p className={styles.pitchText}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text”.
                    </p>
                </section>
                <section className={styles.pitchItemContainer}>
                    <section className={styles.pitchItem}>
                        <h3 className={styles.pitchItemTitle}>Data Driven</h3>
                        <p className={styles.pitchItemText}>
                            I'm a paragraph. Click here to add your own text and
                            edit me. It’s easy.
                        </p>
                    </section>
                    <section className={styles.pitchItem}>
                        <h3 className={styles.pitchItemTitle}>Innovation</h3>
                        <p className={styles.pitchItemText}>
                            I'm a paragraph. Click here to add your own text and
                            edit me. It’s easy.
                        </p>
                    </section>
                    <section className={styles.pitchItem}>
                        <h3 className={styles.pitchItemTitle}>Creativity</h3>
                        <p className={styles.pitchItemText}>
                            I'm a paragraph. Click here to add your own text and
                            edit me. It’s easy.
                        </p>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Header;
