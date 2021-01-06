import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.link} project={project} />
      ))}
    </>
  );
}
