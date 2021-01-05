import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Project = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <article>
      <HeadPost meta={meta} />
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
