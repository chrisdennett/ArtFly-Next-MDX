import { ProjectHeader } from "../components/ProjectHeader";
import styles from "./project.module.css";

export default function Project({ children, meta }) {
  return (
    <>
      <ProjectHeader meta={meta} isBlogPost />
      <article className={styles.project}>{children}</article>
    </>
  );
}
