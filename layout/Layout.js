import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main className={`wrapper ${styles.main}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
