import { Flex, Select, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../components/GlobalContext/AuthContext";
import PendingRequestTable from "../table/PendingRequestTable";
import ProcessRequestTable from "../table/ProcessRequestTable";

export default function ConsultingStaffDashboard() {
  const user = useContext(UserContext);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop={10}
        gap={5}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Welcome: {user.userAuth.fullname}
        </Text>
        <Select
          name="filter"
          w={"200px"}
          placeholder="Filter Request"
          onChange={handleFilterChange}
        >
          <option value="pending">Pending Request</option>
          <option value="process">Process Request</option>
        </Select>
        {(filter === "pending" && <PendingRequestTable />) ||
          (filter === "process" && <ProcessRequestTable />)}
      </Flex>
    </>
  );
}
