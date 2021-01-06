import Link from "next/link";
import styled from "styled-components";

export const ProjectHeader = ({ meta }) => {
  const url = "/" + meta.people.split(" ").join("-").toLowerCase();

  return (
    <Header>
      <h1>{meta.title}</h1>
      <span>{meta.date}</span>
      <span>
        <Link href={url}>{meta.people}</Link>
      </span>
      <p>{meta.description}</p>
    </Header>
  );
};

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  span {
    display: block;
  }

  p {
    padding-top: 10px;
    font-size: 1.5em;
  }
`;
