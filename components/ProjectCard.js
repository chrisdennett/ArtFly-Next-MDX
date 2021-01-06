import styles from "./projectcard.module.css";
import Link from "next/link";
import { ProjectHeader } from "./ProjectHeader";

export const ProjectCard = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <Link href={"/projects" + link}>
      <article className={styles.projectCard}>
        <ProjectHeader meta={meta} />
        <a>Read more &rarr;</a>
      </article>
    </Link>
  );
};
