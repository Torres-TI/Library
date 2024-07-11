import Head from "next/head";
import React from "react";

export interface WebPageProps {
  title?: string;
}
const WebPage: React.FC<WebPageProps> = ({ title = "Library" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};

export default WebPage;
