import styled from "./project.module.css";
import { ProjectHeader } from "../components/ProjectHeader";

export default function Project({ children, meta }) {
  return (
    <div className={styled.project}>
      <ProjectHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </div>
  );
}
