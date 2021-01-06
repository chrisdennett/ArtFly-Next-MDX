import { ProjectHeader } from "./ProjectHeader";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <ProjectHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
