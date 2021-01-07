import styled from "./projectCard.module.css";
import Link from "next/link";
import Img from "./Img";

export const ProjectCard = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <Link href={"/projects" + link}>
      <div className={styled.projectCard}>
        <Img
          src={meta.thumb}
          alt="game screen shot"
          style={{ maxWidth: 400 }}
        />
        <h2>{meta.title}</h2>
        <span>{meta.people}</span>
        <p>{meta.description}</p>
      </div>
    </Link>
  );
};
