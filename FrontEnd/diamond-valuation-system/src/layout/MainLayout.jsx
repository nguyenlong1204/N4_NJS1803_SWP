import React from "react";
import Header from "../components/Header";
import classnames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer";
let cx = classnames.bind(styles);
export default function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
      <Footer/>
    </div>
  );
}
