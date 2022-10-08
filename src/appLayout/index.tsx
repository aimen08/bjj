import Head from "next/head";
import React from "react";

type Props = {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Brazilian Jiu Jitsu</title>
        <meta name="description" content="brazilian jiu jitsu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
}
