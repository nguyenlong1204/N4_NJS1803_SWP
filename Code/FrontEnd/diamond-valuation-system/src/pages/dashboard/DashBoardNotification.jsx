import { Box, Center, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import NotificationToast from "../../components/notification/NotificationToast";
import NotificationCard from "../../components/notification/NotificationCard";

export default function DashBoardNotification() {
  const toast = useToast();
  const user = useContext(UserContext);
  const isUsers =
    user.userAuth &&
    user.userAuth.authorities &&
    user.userAuth.authorities.length > 0;
  let finishedNotification = null;
  if (localStorage.getItem("finishedRequests")) {
    try {
      finishedNotification = JSON.parse(
        localStorage.getItem("finishedRequests")
      );
    } catch (e) {
      console.log(e);
    }
  }
  let sealedNotification = null;
  if (localStorage.getItem("sealedRequests")) {
    try {
      sealedNotification = JSON.parse(localStorage.getItem("sealedRequests"));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("finishedRequests"))?.length);
  }, []);
  return (
    <>
    <Box>
      <Flex direction={"column"} gap={10}>
        <Center>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Notification
          </Text>
        </Center>
        </Flex>
        {isUsers &&
          finishedNotification &&
          finishedNotification.map(
            (item, index) =>
              (user.userAuth.id === item.customerId ||
                user.userAuth.id === item.consultingStaffId ||
                user.userAuth.authorities[0].authority === "Manager") && (
                <div key={index}>
                  <NotificationCard
                    type={"finished"}
                    processRequestId={item.processRequestId}
                  />
                  <div style={{ display: "none" }}>
                    {toast({
                      title: "Request has been finished",
                      description: `Request ID: ${item.processRequestId}`,
                      position: "top-right",
                      render: () => (
                        <NotificationToast
                          type={"finished"}
                          processRequestId={item.processRequestId}
                        />
                      ),
                      duration: 1000,
                      isClosable: true,
                    })}
                  </div>
                </div>
              )
          )}
        {isUsers &&
          sealedNotification &&
          sealedNotification.map(
            (item, index) =>
              (user.userAuth.id === item.customerId ||
                user.userAuth.id === item.consultingStaffId ||
                user.userAuth.authorities[0].authority === "Manager") && (
                <div key={index}>
                  <NotificationCard
                    key={index}
                    type={"sealed"}
                    processRequestId={item.processRequestId}
                  />
                  <div style={{ display: "none" }}>
                    {toast({
                      title: "Request has been sealed",
                      description: `Request ID: ${item.processRequestId}`,
                      position: "top-right",
                      render: () => (
                        <NotificationToast
                          type={"sealed"}
                          processRequestId={item.processRequestId}
                        />
                      ),
                      duration: 1000,
                      isClosable: true,
                    })}
                  </div>
                </div>
              )
          )}
        {(finishedNotification === null ||
          JSON.parse(localStorage.getItem("finishedRequests")).length === 0) &&
          (sealedNotification === null ||
            JSON.parse(localStorage.getItem("sealedRequests")).length ===
              0) && (
            <Center m={10}>
              No Notification
            </Center>
          )}
      </Box>
    </>
  );
}
