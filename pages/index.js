import Link from "next/link";
import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      <Intro>
        A place to document the creative projects, events, thingamabobs and
        oogamewhatsits <Link href="/jennie-dennett">Jennie Dennett</Link> and{" "}
        <Link href="/chris-dennett">Chris Dennett</Link> make and do.
      </Intro>

      <SectionHeader>PROJECTS:</SectionHeader>

      <Projects>
        {projects.map((project) => (
          <ProjectCard key={project.link} project={project} />
        ))}
      </Projects>
    </>
  );
}

const Intro = styled.p`
  font-size: 1.5rem;
  margin: 0px auto 40px;
  max-width: 960px;
  text-align: center;
`;

const SectionHeader = styled.p`
  font-size: 1.5em;
  margin: 20px 0;
  text-align: center;
  padding: 20px 0px;
  border-top: 2px dashed rgba(0, 0, 0, 0.2);
  border-bottom: 2px dashed rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
`;

const Projects = styled.section`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
