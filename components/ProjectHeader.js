import styled from "./projectHeader.module.css";
import Link from "next/link";

export const ProjectHeader = ({ meta }) => {
  const url = "/" + meta.people.split(" ").join("-").toLowerCase();

  return (
    <header className={styled.projectHeader}>
      <h1>{meta.title}</h1>
      <span>{meta.date}</span>
      <span>
        <Link href={url}>{meta.people}</Link>
      </span>
      <p>{meta.description}</p>
    </header>
  );
};
