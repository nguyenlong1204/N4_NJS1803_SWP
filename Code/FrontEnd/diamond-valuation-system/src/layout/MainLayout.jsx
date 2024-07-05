import React, { useContext } from "react";
import Header from "../components/Header";
import classnames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer";
import { UserContext } from "../components/GlobalContext/AuthContext";
import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import routes from "../config/Config";
let cx = classnames.bind(styles);
export default function MainLayout({ children }) {
  const auth = useContext(UserContext);
  const nav = useNavigate();
  return (
    <>
      <Header />
      {children}
      {auth.userAuth.roleid === 5 && (
        <Button
          onClick={() => nav(routes.diamondValuationRequest)}
          position={"fixed"}
          left={"20px"}
          bottom={"60px"}
          colorScheme="blue"
        >
          <FaPlus style={{ marginRight: "10px" }} /> Create Request
        </Button>
      )}
      <Footer />
    </>
  );
}
