import React, { useContext } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Divider,
  Spacer,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoDiamondSharp,
} from "react-icons/io5";
import { IoIosNotificationsOutline, IoMdSearch } from "react-icons/io";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { PiCalculatorThin } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { BsNewspaper } from "react-icons/bs";
import {RiBookMarkedFill} from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import routes from "../../config/Config";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import Profile from "../../components/Profile";

const menuItems = [
  {
    roleid: [3, 4, 5],
    path: routes.dasboardNotification,
    icon: IoIosNotificationsOutline,
    label: "Notifications",
  },
  {
    roleid: [],
    path: routes.dashboardAppoint,
    icon: CiCalendar,
    label: "Appointments",
  },
  {
    roleid: [2, 5],
    path: routes.sealingLetter,
    icon: IoNewspaperOutline,
    label: "Sealing Letter",
  },
  {
    roleid: [2, 5],
    path: routes.commitment,
    icon: RiBookMarkedFill,
    label: "Commitment",
  },
  {
    roleid: [2],
    path: "#",
    icon: IoDiamondSharp,
    label: "Valuated Diamond",
  },
  {
    roleid: [2,3, 5],
    path: routes.pendingRequest,
    icon: IoNewspaperOutline,
    label: "Pending Request",
  },
  {
    roleid: [2,3, 5],
    path: routes.processRequest,
    icon: VscServerProcess,
    label: "Process Request",
  },
  {
    roleid: [4],
    path: routes.valuationDiamond,
    icon: BsNewspaper,
    label: "Valuation Diamond",
  },
];

const generalMenuItems = [
  {
    path: "/",
    icon: IoHomeOutline,
    label: "Home",
  },
  {
    path: routes.diamondCalculate,
    icon: PiCalculatorThin,
    label: "Valuation",
  },
  {
    path: routes.search,
    icon: IoMdSearch,
    label: "Search",
  },
  {
    path: routes.diamondCheck,
    icon: MdOutlineRemoveRedEye,
    label: "Diamond Check",
  },
  {
    roleid: [5],
    path: routes.dashboardSetting,
    icon: CiSettings,
    label: "Setting",
  },
];

const SideBar = () => {
  const auth = useContext(UserContext);
  const bg = useColorModeValue("gray.800", "black");
  const color = useColorModeValue("white", "gray.200");
  const hoverBg = useColorModeValue("purple.700", "purple.600");

  const isXsView = useBreakpointValue({ base: true, sm: false });

  const renderMenuItem = ({ path, icon: Icon, label }) => (
    <Link to={path} key={label}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: hoverBg,
          color: "white",
        }}
      >
        <Icon />
        {!isXsView && <Text ml="4">{label}</Text>}
      </Flex>
    </Link>
  );

  return (
    <Box
      bg={bg}
      color={color}
      minH="100vh"
      w={isXsView ? "75px" : "250px"}
      pos="fixed"
      borderRight="1px"
      borderColor="gray.200"
      borderRadius={8}
    >
      {!isXsView && <Profile />}
      <Divider my="8" borderColor="gray.600" />
      <VStack spacing="2" align="stretch">
        <Link to={routes.dashboard}>
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: hoverBg,
              color: "white",
            }}
          >
            <RxDashboard />
            {!isXsView && <Text ml="4">Dashboard</Text>}
          </Flex>
        </Link>
        {menuItems
          .filter((item) => item.roleid.includes(auth.userAuth.roleid))
          .map(renderMenuItem)}
      </VStack>
      <Spacer />
      <Divider my="8" borderColor="gray.600" />
      <VStack spacing="2" align="stretch">
        {generalMenuItems
          .filter(
            (item) => !item.roleid || item.roleid.includes(auth.userAuth.roleid)
          )
          .map(renderMenuItem)}
      </VStack>
    </Box>
  );
};

export default SideBar;
