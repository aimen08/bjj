import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Loading from "../components/Loading";
import { useEffect } from "react";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <>
      <Head>
        <title>Brazilian Jiu Jitsu</title>
        <meta name="description" content="brazilian jiu jitsu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <Loading />
      </main>
    </>
  );
};

export default Home;
