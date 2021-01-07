import Head from "next/head";
import styled from "./layout.module.css";
import Header from "./Header";
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
      <footer className={styled.footer}>
        <div className={styled.ending}>
          <Img src={"Rotoscoping"} />
          <p>You know it's all over when the victorian lady jumps the stool.</p>
        </div>
        <div>© {new Date().getFullYear()} ArtFly</div>
      </footer>
    </>
  );
}
