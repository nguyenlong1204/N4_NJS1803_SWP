import React from "react";
import SideBar from "./sidebar/SideBar";
import DashBoard from "../pages/dashboard/consulting/ConsultingDashBoard";
import { Box, Flex } from "@chakra-ui/react";
import SideBarAdmin from "./sidebar/SideBarAdmin";
import SideBarManager from "./sidebar/SideBarManager";
import SideBarStaff from "./sidebar/SideBarConsultingStaff";
import SideBarConsultingStaff from "./sidebar/SideBarConsultingStaff";
import SideBarValuationStaff from "./sidebar/SideBarValuationStaff";

export default function DashBoardLayout({ children }) {
    let users = {
        role: 5, // Test dashboard role
    };
    return (
        <Flex width={"100%"} height={"100vh"} bg={"rgb(243 244 246)"}>
            <Box w="256px">
                {users.role === 1 && <SideBarAdmin />}
                {users.role === 2 && <SideBarManager />}
                {users.role === 3 && <SideBarConsultingStaff />}
                {users.role === 4 && <SideBarValuationStaff />}
                {users.role === 5 && <SideBar />}
            </Box>
            <Box flex="1" bg="#fff" px={5} pt={5} mt={5}>
                {children}
            </Box>
        </Flex>
    );
}
