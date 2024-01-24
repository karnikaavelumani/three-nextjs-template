// import Image from "next/image";
import styles from "./page.module.css";
import { Scene } from "@/components/scene";

export default function Home() {
  return (
    <main className={styles.main}>
      <Scene />
    </main>
  );
}
