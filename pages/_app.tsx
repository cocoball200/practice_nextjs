import "../styles/globals.css";
import type { AppProps } from "next/dist/shared/lib/router/router";
import NavBar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
