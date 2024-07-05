import { Flex, Select, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import PendingRequestTable from "../table/PendingRequestTable";
import ProcessRequestTable from "../table/ProcessRequestTable";
import SealingLetterTable from "../table/SealingLetterTable";
import CommitmentTable from "../table/CommitmentTable";
export default function ManagerDashboard() {
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
          Welcome: Lam Tien Hung
        </Text>
        <Text fontSize="xl">For Manager</Text>
        <Select w={"200px"} placeholder="Filter" onChange={handleFilterChange}>
          <option value="pending">Pending Request</option>
          <option value="process">Process Request</option>
          <option value="sealing">Sealing Letter</option>
          <option value={"commitment"}>Commitment Letter</option>
        </Select>
        {(filter === "pending" && <PendingRequestTable />) ||
          (filter === "process" && <ProcessRequestTable />) ||
          (filter === "sealing" && <SealingLetterTable />) ||
          (filter === "commitment" && <CommitmentTable />)}
      </Flex>
    </>
  );
}
