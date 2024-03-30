import styles from "./page.module.css";
import Counter from "./counter";

async function fetchDataFromQwik() {
  const response = await fetch("http://localhost:4173/");
  const data = await response.text();

  return data;
}

export default async function Home() {
  const data = await fetchDataFromQwik();

  return (
    <main className={styles.main}>
      <div>
        <p>Next demo</p>
        <Counter />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </main>
  );
}
