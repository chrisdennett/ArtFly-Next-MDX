import Link from "next/link";
import { ProjectHeader } from "./ProjectHeader";

export const Project = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <article>
      <ProjectHeader meta={meta} />
      <Link href={"/projects" + link}>
        <a>Read more &rarr;</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  );
};
