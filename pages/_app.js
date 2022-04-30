import "../styles/globals.css";
import Head from "next/head";
import ContainerBlock from "../components/common/ContainerBlock";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Passport</title>
        <meta></meta>
      </Head>
      <ContainerBlock>
        <Component {...pageProps} />
      </ContainerBlock>
    </>
  );
}

export default MyApp;
