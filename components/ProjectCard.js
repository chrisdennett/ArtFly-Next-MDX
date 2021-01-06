import Link from "next/link";
import styled from "styled-components";
import Img from "./Img";

export const ProjectCard = ({ project }) => {
  const {
    link,
    module: { meta },
  } = project;

  return (
    <Link href={"/projects" + link}>
      <Card>
        <Img
          src={meta.thumb}
          alt="game screen shot"
          style={{ maxWidth: 400 }}
        />
        <h2>{meta.title}</h2>
        <span>{meta.people}</span>
        <p>{meta.description}</p>
      </Card>
    </Link>
  );
};

const Card = styled.article`
  margin-bottom: 50px;
  cursor: pointer;

  h2 {
    /* padding-bottom: 0; */
  }

  span {
    display: block;
    font-style: italic;
    margin: 0;
  }

  p {
    padding-top: 10px;
    margin: 0;
  }
`;
