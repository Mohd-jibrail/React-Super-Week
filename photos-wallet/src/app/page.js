import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header></Header>
        <h1>Body</h1>
        <Footer></Footer>
      </div>
    </main>
  );
}
