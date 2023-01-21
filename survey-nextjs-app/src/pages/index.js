import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import NoSSR from "react-no-ssr";
import JimmySurvey from "@/components/JimmySurvey";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Survey Time!</title>
        <meta name="description" content="Surveys for days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/survey-react@1.9.69/defaultV2.css"
          type="text/css"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div id="surveyContainer"></div>
        <NoSSR>
          <JimmySurvey />
        </NoSSR>
      </main>
    </>
  );
}
