import Head from "next/head"
import Script from "next/script"
import "@/styles/app.scss"
import "@/styles/navbar.scss"
import "@/styles/banner.scss"
import "@/styles/footer.scss"
import "@/styles/transaction.scss"
import "@/styles/encrypt.scss"
import "@/styles/history.scss"
import "@/styles/home.scss"
import "@/styles/importwallet.scss"
import "@/styles/create.scss"
import "@/styles/unlock.scss"
import Footer from "../components/footer"
import { useEffect } from "react"


export default function App({ Component, pageProps }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    document.body.className = savedTheme || 'light-theme';
  }, []);
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" />
    </Head>
    <Component {...pageProps} />
    {/* <Footer /> */}


    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></Script>
    <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></Script>
  </>
}
