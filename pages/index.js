import Link from "next/link";
import styled from "./index.module.css";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      <p className={styled.intro}>
        A place to document the creative projects, events, thingamabobs and
        oogamewhatsits <Link href="/jennie-dennett">Jennie Dennett</Link> and{" "}
        <Link href="/chris-dennett">Chris Dennett</Link> make and do.
      </p>

      <p className={styled.sectionHeader}>PROJECTS:</p>

      <div className={styled.projectList}>
        {projects.map((project) => (
          <ProjectCard key={project.link} project={project} />
        ))}
      </div>
    </>
  );
}
