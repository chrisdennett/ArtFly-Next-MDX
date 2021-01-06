import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";
import Image from "next/image";
import Img from "../components/Img";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Header />
        {children}
      </main>
      <FooterStyled>
        <Fini>
          <Img src={"Rotoscoping"} />
          <p>You know it's all over when the victorian lady jumps the stool.</p>
        </Fini>
        <div>© {new Date().getFullYear()} ArtFly</div>
      </FooterStyled>
    </>
  );
}

const FooterStyled = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const Fini = styled.div`
  font-size: 14px;
  background: white;
  max-width: 240px;
  padding: 15px;
  border-radius: 5px;
  margin: 0 auto 50px auto;

  img {
    margin-bottom: 10px;
  }
`;
