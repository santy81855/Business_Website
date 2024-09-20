import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "@/features/footer";

export default function Home() {
    return (
        <div className={styles.main}>
            <Footer />;
        </div>
    );
}
