import axios from "axios";

export const fetchProcessRequest = async (
  setProcessRequest,
  currentPage,
  setTotalPage,
  toast
) => {
  try {
    await axios
      .get(
        `http://localhost:8081/api/process-request/get?page=${currentPage}&staffId=3`
      )
      .then(function (response) {
        setProcessRequest(response.data.content);
        setTotalPage(response.data.totalPages);
        console.log(response.data);
      });
  } catch (e) {
    console.log(e);
    toast({
      title: "Error",
      description: "Cannot fetch data",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};

export const handleProcessRequest = async (
  toast,
  type,
  processRequestType,
  consultingStaffId,
  valuationRequestId
) => {
  try {
    await axios
      .post("http://localhost:8081/api/process-request/update", {
        type: type,
        processRequestType:processRequestType,
        consultingStaffId: consultingStaffId,
        valuationRequestId: valuationRequestId,
      })
      .then(function (response) {
        if (response.data === "Cannot reject") {
          toast({
            title: "Error",
            description: "Cannot reject",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Success",
            description: response.data,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  } catch (e) {
    console.log(e);
    toast({
      title: "Error",
      description: "Cannot update data",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};

export const checkSealingDate = async (setIsCheckSealingDate, toast) => {
  try {
    await axios
      .get(`http://localhost:8081/api/sealing-letter/check?id=${2}`)
      .then(function (response) {
        console.log(response.data);
        if (response.data === "Create sealing letter") {
          setIsCheckSealingDate(true);
        }
      });
  } catch (e) {
    toast({
      title: "Error",
      description: "Cannot fetch data",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.log(e);
  }
};

export const checkFinishDate = async (setIsCheckFinishDate, toast) => {
  try {
    await axios
      .get(`http://localhost:8081/api/valuation-request/check-finished?id=${7}`)
      .then(function (response) {
        console.log(response.data);
        if (response.data === "Finish request") {
          setIsCheckFinishDate(true);
        }
      });
  } catch (e) {
    toast({
      title: "Error",
      description: "Cannot fetch data",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.log(e);
  }
};
