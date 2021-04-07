import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="p-2 bg-purple-600 rounded text-2xl text-white cursor-pointer">
          Register
        </h1>
      </main>
    </div>
  );
}
