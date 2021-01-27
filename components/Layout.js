import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <main className={styles.container}>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
