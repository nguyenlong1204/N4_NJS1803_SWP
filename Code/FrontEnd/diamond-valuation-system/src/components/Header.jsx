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
  Container,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  HamburgerIcon,
  Icon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { GiDiamondTrophy } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import routes from "../config/Config";
import Login from "../pages/login/Login";
import { useContext } from "react";
import { UserContext } from "./GlobalContext/AuthContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue("white", "black");
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
  const changeColorMode = () => {
    toggleColorMode();
    // document.querySelector("._container_tczam_16").style.backgroundColor =
    //   colorMode === "light" ? "black" : "white";
    // document.querySelector("._wrapper_tczam_7").style.backgroundColor =
    //   colorMode === "light" ? "black" : "white";
  };
  return (
      <Container marginBottom={"70px"}>
        <ToastContainer />
        <Flex
          position={"fixed"}
          top={"0px"}
          left={"0px"}
          width={"100vw"}
          height="70px"
          zIndex={1}
          direction={"row"}
          align={"center"}
          bg={bgColor}
          style={{
            boxShadow: `0px 0px 15px 0px gray`,
            backdropFilter: "blur(20px)",
          }}
          p={5}
        >
          <Flex
            flex={1}
            display={{ base: "flex", md: "flex", lg: "none" }}
            onClick={onToggle}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={"outline"}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _focus={{ boxShadow: "outline" }}
              />
              <MenuList>
                <MenuItem>
                  <Link to={routes.search}>Search</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.diamondCheck}>Diamond Check</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.diamondCalculate}>Valuation</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.prices}>Price</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.educationCut}>Education</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Link to={routes.home}>
            <Flex
              direction={"row"}
              flex={{ base: 6, md: 1, lg: 1 }}
              alignItems={"center"}
              justify={{ base: "center", md: "start", lg: "start" }}
            >
              <Icon
                as={GiDiamondTrophy}
                w={{ base: 5, md: 8, lg: 10 }}
                h={{ base: 5, md: 8, lg: 10 }}
              />
              <Text
                fontFamily={"The Nautigal"}
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight={"bold"}
                m={"10px "}
              >
                DiamondVal
              </Text>
            </Flex>
          </Link>
          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            flex={6}
            direction="row"
            alignItems={"center"}
            justify={"center"}
            gap={20}
          >
            <Link to={routes.search}>
              <Text fontSize={"lg"} fontWeight={"bold"}>
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
                <Link to={"/"}>
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
          <Flex
            direction="row"
            flex={1}
            gap={{ base: 2, md: 3, lg: 5 }}
            alignItems={"center"}
            justify={{ base: "center", md: "end", lg: "end" }}
          >
            <IconButton
              size={{ base: "xs", md: "sm", lg: "md" }}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={changeColorMode}
            />
            {!auth.userAuth ? (
              <Button
                colorScheme="blue"
                size={{ base: "xs", md: "sm", lg: "md" }}
                onClick={modalSignIn.onOpen}
              >
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
                  Sign in
                </Text>
              </Button>
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg={colorMode}
                >
                  <Avatar
                    name={auth.userAuth.fullname}
                    // src="https://bit.ly/broken-link"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => nav("/dashboard")}>
                    Dash board
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>
        <Login signIn={modalSignIn} signUp={modalSignUp} />
      </Container>
  );
}
