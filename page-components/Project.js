import styled from "styled-components";
import { ProjectHeader } from "../components/ProjectHeader";

export default function Project({ children, meta }) {
  return (
    <Holder>
      <ProjectHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </Holder>
  );
}

const Holder = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 10px 50px 20px;
`;
