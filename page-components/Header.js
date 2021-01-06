import Link from "next/link";
import styled from "styled-components";
import HoverLogo from "../components/HoverLogo";

export default function Header() {
  return (
    <Link href="/">
      <HeaderStyled>
        <span>ArtFly</span>
        <HoverLogo />
        <span>Projects</span>
      </HeaderStyled>
    </Link>
  );
}

const HeaderStyled = styled.div`
  font-weight: 600;
  padding: 1.5em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 34px;
    letter-spacing: 2px;
    font-weight: normal;
  }
`;
