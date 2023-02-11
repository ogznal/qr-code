import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | QR code component</title>
        <meta
          name="description"
          content="QR code challenge for Frontend Mentor"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex w-1/5 flex-col items-center rounded-xl bg-white p-4 pb-8 drop-shadow-2xl">
          <img
            src="/image-qr-code.png"
            alt="qr code"
            className="mb-5 rounded-xl"
          />
          <h1 className="mb-2 p-2 text-center text-xl font-bold text-[#1f3251]">
            Improve your front-end skills by building projects
          </h1>
          <p className="px-5 text-center text-sm text-[#7b879d]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
