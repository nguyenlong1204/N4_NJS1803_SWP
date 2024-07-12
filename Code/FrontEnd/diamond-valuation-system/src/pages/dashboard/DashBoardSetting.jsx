import {
    Divider,
    Flex,
    Text,
    Box,
    useColorModeValue,
    Container,
    Button,
    useToast,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";

import Title from "../../components/Title";
import ScrollToTop from "react-scroll-to-top";
import { UserContext } from "../../components/GlobalContext/AuthContext";
import { deleteHardAccount } from "../../service/DeleteHardAccount";

export default function DashBoardSetting() {
  const auth = useContext(UserContext);
  const bgColor = useColorModeValue("white", "black");
  const bgColor1 = useColorModeValue("gray", "yellow");
  const fontColor = useColorModeValue("#000", "#fff");
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    const handleDeleteAccount = async () => {
        try {
            const result = await deleteHardAccount(
                auth.userAuth.id,
                auth.userAuth.token
            );
            console.log(result);
            if (!result.errCode) {
                toast({
                    title: "Delete successful.",
                    status: "success",
                    position: "top-right",
                    duration: 2000,
                    isClosable: true,
                });
            }
            else {
              toast({
                title: "Delete Fail.",
                status: "error",
                position: "top-right",
                duration: 2000,
                isClosable: true,
            });
            }
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Box bg={bgColor}>
      <ScrollToTop
        smooth
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
        }}
      />
      <Container mawW={"100vw"} bg={bgColor}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bg={bgColor}
          paddingTop={10}
        >
          <Flex >
            <Title title={"Your Account Settings"} width={"60vw"} />

            <Text display={"flex"}>{auth.userAuth.fullname}</Text>
          </Flex>
          <Divider m={"20px 0 20px 0"} />
          <Box
            bg={bgColor}
            border="2px dashed"
            borderColor={bgColor1}
            borderRadius="4px"
            p={4}
            color={fontColor}
            width="100%"
            minWidth={{ md: 1000 }}
            sx={{ mt: 5, mb: 5 }}
          >
            <Text fontSize={{ xs: "18px", md: "24px" }} fontWeight="bold">
              Email Addresses
            </Text>
            <Text fontSize={{ xs: "14px", md: "16px" }}>
              The following email addresses are associated with your account:
            </Text>
            <Text fontSize={{ xs: "14px", md: "16px" }}>
              Email: {auth.userAuth.email}
            </Text>
          </Box>

          <Box
           bg={bgColor}
           border="2px dashed"
           borderColor={bgColor1}
           borderRadius="4px"
           p={4}
           color={fontColor}
           width="100%"
           minWidth={{ md: 1000 }}
           sx={{ mt: 5, mb: 5 }}
          >
            <Text fontSize={{ xs: "18px", md: "24px" }} fontWeight="bold">
              Update Account
            </Text>
            <Text fontSize={{ xs: "14px", md: "16px" }}>
              You can update your account by clicking "Update Account" below.
            </Text>

            <Button
              bg="blue.500"
              mt={"20px"}
              onClick={() => setIsOpenUpdate(true)}
            >
              Update Account
            </Button>
          </Box>
          <Box
            bg={bgColor}
            border="2px dashed"
            borderColor={bgColor1}
            borderRadius="4px"
            p={4}
            color={fontColor}
            width="100%"
            minWidth={{ md: 1000 }}
            sx={{ mt: 5, mb: 5 }}
          >
            <Text fontSize={{ xs: "18px", md: "24px" }} fontWeight="bold">
              Delete Account
            </Text>
            <Text fontSize={{ xs: "14px", md: "16px" }}>
              You can delete your account by clicking "Delete Account" below.
            </Text>
            <Text color="red" fontSize={{ xs: "14px", md: "16px" }}>
              Please note: this action cannot be undone and all data associated
              with this account will be lost forever.
            </Text>
            <Button
              bg="red.500"
              mt={"20px"}
              onClick={() => setIsOpen(true)}
            >
              Delete Account
            </Button>

                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader
                                        fontSize="lg"
                                        fontWeight="bold"
                                    >
                                        Delete Account
                                    </AlertDialogHeader>

                                    <AlertDialogBody>
                                        Are you sure you want to delete your
                                        account? This action cannot be undone.
                                    </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      bg="red.500"
                      onClick={handleDeleteAccount}
                      ml={3}
                    >
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
