import React from "react";
import Header from "../components/Header";
import classnames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer";
let cx = classnames.bind(styles);
export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}
