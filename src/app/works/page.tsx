import styles from "./page.module.css";
import { Footer } from "@/features/footer";
import { Works } from "@/features/works";

export default function Home() {
    return (
        <main className={styles.main}>
            <Works />
            <Footer />
        </main>
    );
}
