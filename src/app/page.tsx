import styles from "./page.module.css";
import { Header } from "@/features/landing-page";
import { Footer } from "@/features/footer";

export default function Home() {
    return (
        <div className={styles.main}>
            <Header />
            <Footer />
        </div>
    );
}
