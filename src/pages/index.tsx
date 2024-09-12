import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Footer from "@theme/Footer";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import React from "react";
import { TopAlert } from "../components/header/topAlert";
import "../css/header.css";
import SearchBar from "@theme/SearchBar";
import { Logo } from "../components/icons/logo";
import { DocsSvg, RightArrow } from "../components/icons";
import { DropDown } from "../components/header/dropdown";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <div className="headerContainer">
          <TopAlert />
          <div className="navBarContainer">
            <div className="navBarFirstSection">
              <Logo /> <DocsSvg />
              <div className="dropDownAndBtn">
                <button className="outlinedBtn">Tuturials</button>
                <DropDown />
              </div>
            </div>
            <div className="navBarSecondSection">
              <SearchBar />
            </div>
            <div className="navBarLastSection">
              <button className="outlinedBtn">Hasura.io</button>
              <button className="outlinedBtn">Testomonials</button>
              <button className="primaryBtn">
                Log in <RightArrow />
              </button>
            </div>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
