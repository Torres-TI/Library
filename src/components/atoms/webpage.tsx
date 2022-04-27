import Head from "next/head";
import React from "react";

export interface WebPageProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
}
const WebPage: React.FC<WebPageProps> = ({
  className,
  children,
  title = "Library",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        className={
          className ??
          "flex flex-row flex-1 min-h-screen min-w-full overflow-hidden"
        }
      >
        {children}
      </div>
    </>
  );
};

export default WebPage;
