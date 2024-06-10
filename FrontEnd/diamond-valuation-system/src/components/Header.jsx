import {
  Button,
  Flex,
  Text,
  Menu,
  useDisclosure,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import routes from "../config/Config";
import Login from "../pages/login/Login";
import { useContext } from "react";
import { UserContext } from "./GlobalContext/AuthContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "black");
  const fontColor = useColorModeValue("black", "white");
  const modalSignIn = useDisclosure();
  const modalSignUp = useDisclosure();
  const auth = useContext(UserContext);
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.reload();
    }, [200]);
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
    <>
      <ToastContainer />
      <Flex
        position={"fixed"}
        top={"0px"}
        left={"0px"}
        width={"100vw"}
        height="70px"
        zIndex={1}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={bgColor}
        style={{ boxShadow:`0px 0px 15px 0px gray`, backdropFilter: "blur(20px)"}}
        p={5}
      >
        <Link to={routes.home}>
          <Flex direction={"row"} alignItems={"center"}>
            <GiDiamondTrophy size={30} />
            <Text fontSize={"lg"} fontWeight={"bold"} m={"10px "}>
              DIAMONDVALUATION
            </Text>
          </Flex>
        </Link>
        <Flex dir="row" gap={20}>
          <Link to={routes.search}>
            <Text fontSize={"lg"} fontWeight={"bold"} color={fontColor}>
              Search
            </Text>
          </Link>
          <Link to={routes.diamondCheck}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Diamond Check
            </Text>
          </Link>
          <Link to={routes.diamondCalculate}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Valuation
            </Text>
          </Link>
          <Link to={routes.prices}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Price
            </Text>
          </Link>
          <Menu>
            <MenuButton
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _focus={{ boxShadow: "outline" }}
            >
              <Link to={"/"} style={{ border: "0px" }}>
                <Flex direction={"row"} gap={2} alignItems={"center"}>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    Education
                  </Text>
                  <ChevronDownIcon />
                </Flex>
              </Link>
            </MenuButton>
            <MenuList>
              <Link to={routes.educationCertificate}>
                <MenuItem>Diamond Certification</MenuItem>
              </Link>
              <Link to={routes.educationShape}>
                <MenuItem>Shape</MenuItem>
              </Link>
              <Link to={routes.educationCarat}>
                <MenuItem>Carat Weight</MenuItem>
              </Link>
              <Link to={routes.educationColor}>
                <MenuItem>Diamond Color</MenuItem>
              </Link>
              <Link to={routes.educationCut}>
                <MenuItem>Cut Quality</MenuItem>
              </Link>
              <Link to={routes.educationClarity}>
                <MenuItem>Diamond Clarity</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
        {console.log(auth.userAuth)}
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
        {!auth.userAuth ? (
          <Button colorScheme="blue" onClick={modalSignIn.onOpen}>
            Sign in
          </Button>
        ) : (
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                name={auth.userAuth.fullname}
                src="https://bit.ly/broken-link"
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => nav("/dashboard")}>Dash board</MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
      <Login signIn={modalSignIn} signUp={modalSignUp} />
    </>
  );
}
