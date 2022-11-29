import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  });

  const router = useRouter();

  function showDrawer() {
    const blacklist = ["/login", "/nova-conta", "/"];
    return !blacklist.includes(router.pathname);
  }

  return (
    <div className="d-flex flex-column p-0 vh-100">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ECommerce</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="row m=0 flex-grow-1">
        {showDrawer() ? <Drawer /> : ""}
        <div
          className={showDrawer() ? "col-md-10 bg-light" : "col-md-12 bg-light"}
        >
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
