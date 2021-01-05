import { Project } from "../components/Project";
import { projects } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.link} project={project} />
      ))}
    </>
  );
}
