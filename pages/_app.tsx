import type { AppProps } from "next/app";
import _Layout from "../components/_Layout";
import "../styles/globals.scss";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <_Layout>
      <Component {...pageProps} />
    </_Layout>
  );
}

export default MyApp;
