import Image from "next/image";
import styles from "./page.module.css";

async function fetchDataFromQwik() {
  const response = await fetch("http://localhost:5173/");
  const data = await response.text();
  console.log(data);

  return data;
}

export default async function Home() {
  const data = await fetchDataFromQwik();

  return (
    <main className={styles.main}>
      <p>Next demo</p>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </main>
  );
}
