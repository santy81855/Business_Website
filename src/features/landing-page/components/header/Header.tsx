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
                    quality={50}
                    priority
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
                        Ready to take your business to the next level? Get in
                        touch with us today to start building your online
                        presence. Whether you&apos;re looking for a simple
                        website or a full digital strategy, we&apos;ll be with
                        you every step of the way, making the process seamless
                        and stress-free. Let&apos;s work together to create a
                        strong online brand that helps your business grow and
                        succeed. Reach out now, and let&apos;s get started!
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
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
                        Partner with us for professional, customized websites
                        that elevate your brand. We provide reliable, ongoing
                        support to help your business grow.
                    </p>
                </section>
                <section className={styles.pitchItemContainer}>
                    <section className={styles.pitchItem}>
                        <h3 className={styles.pitchItemTitle}>Expertise</h3>
                        <p className={styles.pitchItemText}>
                            Leverage our extensive experience in web design to
                            create tailored solutions that meet your unique
                            business needs.
                        </p>
                    </section>
                    <section className={styles.pitchItem}>
                        <h3 className={styles.pitchItemTitle}>Reliability</h3>
                        <p className={styles.pitchItemText}>
                            Count on us for consistent support, timely project
                            delivery, and long-term website maintenance you can
                            trust.
                        </p>
                    </section>
                    <section className={styles.pitchItem}>
                        <h3 className={styles.pitchItemTitle}>Growth</h3>
                        <p className={styles.pitchItemText}>
                            We focus on building websites that not only look
                            great but also drive traffic, leads, and business
                            growth.
                        </p>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Header;
