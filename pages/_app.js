import "../global-styles.css";
import Layout from "../page-components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Artfly Projects" description="My Projects init...">
      <Component {...pageProps} />
    </Layout>
  );
}
