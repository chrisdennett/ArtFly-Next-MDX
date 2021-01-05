import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledNav>
      <h1>Next'Blog</h1>
      <div>
        <Link href="/">Blog</Link>
        <Link href="/about">About</Link>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: whitesmoke;
  color: black;
  width: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  a {
    margin-right: 1rem;
    text-decoration: none;
    color: black;

    :hover {
      text-decoration: underline;
    }
  }
`;
