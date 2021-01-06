import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <h1>Artfly</h1>
      </Link>
    </nav>
  );
}
