import { ProjectHeader } from "./ProjectHeader";
import styles from "./project.module.css";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <ProjectHeader meta={meta} isBlogPost />
      <article className={styles.project}>{children}</article>
    </>
  );
}
