import styles from "./Contact.module.css";
import Image from "next/image";

const Contact = () => {
    return (
        <section className={styles.contactContainer}>
            <section className={styles.contactBanner}>
                <section className={styles.titleContainer}>
                    <h1 className={styles.contactTitle}>Get in touch</h1>
                    <p className={styles.contactSubtitle}>
                        We would love to hear from you. Please reach out to us
                        with any questions or comments.
                    </p>
                </section>
                <section className={styles.imageContainer}>
                    <Image
                        className={styles.contactImage}
                        src="/images/contact-page/contact-photo.jpg"
                        alt="Contact"
                        width={800}
                        height={400}
                    />
                </section>
            </section>
            <section className={styles.contactInfoContainer}>
                <section className={styles.contactDetails}>
                    <section className={styles.contactDetail}>
                        <p className={styles.contactTitle}>Phone:</p>
                        <p className={styles.contactText}>770-789-7623</p>
                    </section>
                    <section className={styles.contactDetail}>
                        <p className={styles.contactTitle}>Email:</p>
                        <p className={styles.contactText}>
                            example-email@gmail.com
                        </p>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Contact;
