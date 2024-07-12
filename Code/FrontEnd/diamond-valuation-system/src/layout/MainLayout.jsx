import React, { useContext } from "react";
import Header from "../components/Header";
import classnames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer";
import { UserContext } from "../components/GlobalContext/AuthContext";
import { Button, position, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import routes from "../config/Config";
let cx = classnames.bind(styles);
export default function MainLayout({ children }) {
    const auth = useContext(UserContext);
    const nav = useNavigate();
    const bgColor = useColorModeValue("blue.400", "#DBA843");
    const fontColor = useColorModeValue("#fff", "#000");
    const modalSignIn = useDisclosure();
    const toast = useToast();
    const isCustomer =
        auth.userAuth &&
        auth.userAuth.authorities &&
        auth.userAuth.authorities.length > 0 &&
        auth.userAuth.authorities[0].authority === "Customer";
    const handleCreateRequest = () => {
      if (!auth.userAuth) {
        toast({
          title: "You need to login first!",
          status: "warning",
          position:'top-right',
          duration: 3000,
          isClosable: true,
        });
      }
      else {
        if (auth.userAuth.authorities[0].authority === "Customer") {
          nav(routes.diamondValuationRequest);
        }
        else {
          toast({
            title: "You are not allowed to make request!",
            status: "warning",
            position:'top-right',
            duration: 3000,
            isClosable: true,
          });
        }
      }
    }
    return (
        <>
            <Header signIn={modalSignIn.onOpen}/>
            {children}
            <Button
                onClick={handleCreateRequest}
                position={"fixed"}
                left={"20px"}
                bottom={"60px"}
                colorScheme="blue"
            >
                <FaPlus style={{ marginRight: "10px" }} /> Create Request
            </Button>
            <Footer />
        </>
    );
}
