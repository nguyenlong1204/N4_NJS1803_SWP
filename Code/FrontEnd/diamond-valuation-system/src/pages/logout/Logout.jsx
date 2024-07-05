import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate(0);
    }, [500]);
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <Button colorScheme="red" onClick={handleLogout}>
      Logout
    </Button>
  );
}
