import s from "./page.module.css";
import Header from "@/components/header/header";
import MainPage from "@/components/main-pageTwo/main-page";

export default function Home() {
  return (
    <main className={s.page}>
      <Header />
      <MainPage />
    </main>
  );
}
