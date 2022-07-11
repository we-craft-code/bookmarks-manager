import {InferGetStaticPropsType} from "next";
import Head from "next/head";

function Home({message}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-center items-center w-full">
        <span className="text-3xl text-indigo-800">BOOKMARKS MANAGER APP</span>
        <span>{message}</span>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://backend:3001/api/v1/hello", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const {data} = await res.json();

  return {
    props: {
      message: data,
    },
  };
}

export default Home;