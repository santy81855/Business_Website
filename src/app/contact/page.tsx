import styles from "./page.module.css";
import { Footer } from "@/features/footer";
import { Contact } from "@/features/contact-page";

export default function Home() {
    return (
        <div className={styles.main}>
            <Contact />
            <Footer />
        </div>
    );
}
