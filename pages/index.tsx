import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../modules/Header";
import Headline from "../modules/Headline";
import Customers from "../modules/Customers";
import styles from "../styles/Index.module.scss";
import { useLocale, useRouteConfig } from "../hooks/locale";

const Appeal = dynamic(() => import("../modules/Appeal"));
const Footer = dynamic(() => import("../modules/Footer"));
const Contact = dynamic(() => import("../modules/Contact"));
const Solutions = dynamic(() => import("../modules/Solutions"));
const NeedHelp = dynamic(() => import("../components/NeedHelp").then((mod) => mod.NeedHelp));

export default function Home() {
  const { strings } = useLocale("home");
  const { localizedRoute, alternates } = useRouteConfig("home");

  return (
    <React.Fragment>
      <Head>
        <title>{strings.page.title}</title>
        <meta name="title" content={strings.page.title} />

        <meta name="pagename" content={strings.page.title} />
        <meta name="keywords" content={strings.page.keywords} />
        <meta name="subject" content={strings.page.description} />
        <meta name="subtitle" content={strings.page.description} />
        <meta name="description" content={strings.page.description} />

        <meta property="og:image" content="/assets/header-background.jpg" />
        <meta property="og:url" content="https://indays.app" />
        <meta property="og:title" content={strings.page.title} />
        <meta property="og:description" content={strings.page.description} />

        <meta property="twitter:image" content="/assets/header-background.jpg" />
        <meta property="twitter:title" content={strings.page.title} />
        <meta property="twitter:description" content={strings.page.description} />

        <link rel="canonical" href={`https://indays.app/${localizedRoute}`} />
        <link rel="alternate" href={`https://indays.app/en/${alternates.en}`} hrefLang="en" />
        <link rel="alternate" href={`https://indays.app/${alternates["pt-BR"]}`} hrefLang="pt-BR" />
      </Head>

      <NeedHelp />

      <main className="main-container">
        <div className={styles.top}>
          <Header />
          <Headline />
        </div>

        <Customers />
        <hr className="section-divider" />
        <Appeal />
        <hr className="section-divider" />
        <Solutions />
        <hr className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </React.Fragment>
  );
}
