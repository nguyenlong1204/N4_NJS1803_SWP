import {
  Flex,
  Text,
  useDisclosure,
  Button,
  useToast,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef, useContext } from "react";
import ConfirmAlert from "../../components/ConfirmAlert";
import { useDebounce } from "@uidotdev/usehooks";
import AdminViewUsers from "./AdminViewUsers";
import AdminFilterAndSearch from "./AdminFilterAndSearch";
import AdminCreateUsers from "./AdminCreateUsers";
import AdminUpdateUsers from "./AdminUpdateUsers";
import AdminTable from "./AdminTable";
import { fetchAccounts, deleteAccount } from "./AdminServices";
import { UserContext } from "../../components/GlobalContext/AuthContext";
export default function AdminPage() {
  const bgColor = useColorModeValue("white", "black");

  const toast = useToast();

  const user = useContext(UserContext);

  const createUser = useDisclosure();
  const updateUser = useDisclosure();
  const viewUser = useDisclosure();
  const confirmDeleteUser = useDisclosure();
  const cancelRef = useRef();

  const [accounts, setAccounts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [updateAcc, setUpdateAcc] = useState({});
  const [currentAcc, setCurrentAcc] = useState({});

  const [isAdded, setIsAdded] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const pageIndicator = [];

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearch(formData.get("search"));
    e.target.reset();
    e.target.focus();
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFilter(formData.get("filter"));
    e.target.reset();
    e.target.focus();
  };
  for (let i = 1; i <= totalPage; i++) {
    pageIndicator.push(
      <Button
        key={i}
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setCurrentPage(i);
          console.log("current:" + currentPage);
        }}
      >
        {i}
      </Button>
    );
  }

  useEffect(() => {
    if (isAdded) {
      fetchAccounts("", currentPage, "", setAccounts, setTotalPage, toast);
      setIsAdded(false);
    }
  }, [isAdded]);

  useEffect(() => {
    if (isUpdated) {
      fetchAccounts("", currentPage, "", setAccounts, setTotalPage, toast);
      setIsUpdated(false);
    }
  }, [isUpdated]);

  useEffect(() => {
    if (isDeleted) {
      fetchAccounts("", currentPage, "", setAccounts, setTotalPage, toast);
      setIsDeleted(false);
    }
  }, [isDeleted]);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("searching");
      fetchAccounts(
        debouncedSearch,
        currentPage,
        filter || "",
        setAccounts,
        setTotalPage,
        toast
      );
    } else {
      fetchAccounts("", currentPage, "", setAccounts, setTotalPage, toast);
    }
  }, [currentPage, debouncedSearch]);

  return (
    <>
      <Container maxW="100vw">
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          // h={"100vh"}
          gap={10}
          bg={bgColor}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
          >
            Welcome: ADMIN
          </Text>
          <form onSubmit={(handleSearchSubmit, handleFilterSubmit)}>
            <AdminFilterAndSearch
              handleFilterChange={handleFilterChange}
              handleSearchChange={handleSearchChange}
              createUser={createUser}
            />
          </form>
          <AdminTable
            accounts={accounts}
            setUpdateAcc={setUpdateAcc}
            updateUser={updateUser}
            setDeleteId={setDeleteId}
            confirmDeleteUser={confirmDeleteUser}
            viewUser={viewUser}
            setCurrentAcc={setCurrentAcc}
          />
          <Flex direction={"row"} gap={5}>
            {pageIndicator}
          </Flex>
        </Flex>
      </Container>
      <AdminViewUsers
        isOpen={viewUser.isOpen}
        onClose={viewUser.onClose}
        currentAcc={currentAcc}
        setUpdateAcc={setUpdateAcc}
        updateUser={updateUser}
        setDeleteId={setDeleteId}
        confirmDeleteUser={confirmDeleteUser}
      />
      <AdminCreateUsers
        setIsAdded={setIsAdded}
        isOpen={createUser.isOpen}
        onClose={createUser.onClose}
        createUser={createUser}
        toast={toast}
      />
      <AdminUpdateUsers
        setIsUpdated={setIsUpdated}
        isOpen={updateUser.isOpen}
        onClose={updateUser.onClose}
        updateUser={updateUser}
        updateAcc={updateAcc}
        toast={toast}
      />
      <ConfirmAlert
        isOpen={confirmDeleteUser.isOpen}
        onClose={confirmDeleteUser.onClose}
        cancelRef={cancelRef}
        header={"Delete User"}
        body={"Are you sure you want to delete this user?"}
        action={"Delete"}
        colorScheme={"red"}
        onClickFunc={() => {
          confirmDeleteUser.onClose();
          deleteAccount(deleteId, setIsDeleted, toast, user.userAuth.token);
        }}
      />
    </>
  );
}
