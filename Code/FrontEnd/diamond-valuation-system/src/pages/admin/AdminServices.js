import axios from "axios";
export const fetchAccounts = async (
  search,
  pageId,
  filter,
  setAccounts,
  setTotalPage,
  toast
) => {
  try {
    await axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/admin/get?search=${search}&page=${pageId}&filter=${filter}`
      )
      .then(function (response) {
        console.log(response.data.content);
        setAccounts(response.data.content);
        setTotalPage(response.data.totalPages);
      });
  } catch (err) {
    console.log(err);
    toast({
      title: "User fetch failed.",
      description: "Failed to fetch user.",
      position: "top-right",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};

export const createAccount = async (
  roleid,
  username,
  password,
  fullname,
  email,
  phonenumber,
  address,
  toast
) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/create`,
      {
        roleid: roleid,
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        phonenumber: phonenumber,
        address: address,
      }
    );
    if (res.data.includes("exist")) {
      toast({
        title: "User creation failed.",
        description: res.data,
        position: "top-right",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "User created.",
        description: "User has been created successfully.",
        position: "top-right",

        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  } catch (err) {
    toast({
      title: "User creation failed.",
      description: "Failed to create user.",
      position: "top-right",

      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.log(err);
  }
};

export const updateAccount = async (
  id,
  roleid,
  username,
  password,
  fullname,
  email,
  phonenumber,
  address,
  toast,
  token
) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/update`,
      {
        id: id,
        roleid: roleid,
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        phonenumber: phonenumber,
        address: address,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.data.includes("exist")) {
      toast({
        title: "User update failed.",
        description: res.data,
        position: "top-right",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "User updated.",
        description: "User has been updated successfully.",
        position: "top-right",

        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  } catch (err) {
    toast({
      title: "User update failed.",
      description: "Failed to update user.",
      position: "top-right",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.log(err);
  }
};

export const deleteAccount = async (id, setIsDeleted, toast, token) => {
  try {
    await axios
      .delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/delete?id=${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        setIsDeleted(true);
        toast({
          title: "User deleted.",
          description: "User has been deleted successfully.",
          position: "top-right",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
  } catch (err) {
    toast({
      title: "User deletion failed.",
      description: "Failed to delete user.",
      position: "top-right",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.log(err);
  }
};
