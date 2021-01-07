import Link from "next/link";
import styled from "./header.module.css";
import HoverLogo from "../components/HoverLogo";

export default function Header() {
  return (
    <Link href="/">
      <div className={styled.header}>
        <span>ArtFly</span>
        <HoverLogo />
        <span>Projects</span>
      </div>
    </Link>
  );
}
