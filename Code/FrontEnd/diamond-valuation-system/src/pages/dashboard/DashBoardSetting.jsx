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
import React, { useContext, useState } from "react";

import Title from "../../components/Title";
import ScrollToTop from "react-scroll-to-top";
import { UserContext } from "../../components/GlobalContext/AuthContext";

export default function DashBoardSetting() {
    const auth = useContext(UserContext);
    const bgColor = useColorModeValue("white", "black");
    const toast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);

    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();

    const handleDeleteAccount = async () => {
        try {
            await auth.deleteAccount();
            onClose();
            toast({
                title: "Account deleted.",
                description: "Your account has been deleted successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Failed to delete account.",
                description: "An error occurred while deleting your account.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            console.error("Error deleting account:", error);
        }
    };

    return (
        <>
            <ScrollToTop
                smooth
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                }}
            />
            <Container mawW={"100vw"}>
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    bg={bgColor}
                    paddingTop={10}
                >
                    <Flex>
                        <Title title={"Your Account Settings"} width={"60vw"} />

                        <Text display={"flex"}>{auth.userAuth.fullname}</Text>
                    </Flex>
                    <Divider m={"20px 0 20px 0"} />
                    <Box
                        bg="white"
                        border="2px dashed grey"
                        borderRadius="4px"
                        p={4}
                        color="#000"
                        width="100%"
                        minWidth={{ md: 1000 }}
                        sx={{ mt: 5, mb: 5 }}
                    >
                        <Text
                            fontSize={{ xs: "18px", md: "24px" }}
                            fontWeight="bold"
                        >
                            Email Addresses
                        </Text>
                        <Text fontSize={{ xs: "14px", md: "16px" }}>
                            The following email addresses are associated with
                            your account:
                        </Text>
                        <Text fontSize={{ xs: "14px", md: "16px" }}>
                            Email: {auth.userAuth.email}
                        </Text>
                    </Box>

                    <Box
                        bg="white"
                        border="2px dashed grey"
                        borderRadius="4px"
                        p={4}
                        color="#000"
                        width="100%"
                        minWidth={{ md: 1000 }}
                        sx={{ mt: 5, mb: 5 }}
                    >
                        <Text
                            fontSize={{ xs: "18px", md: "24px" }}
                            fontWeight="bold"
                        >
                            Update Account
                        </Text>
                        <Text fontSize={{ xs: "14px", md: "16px" }}>
                            You can update your account by clicking "Update
                            Account" below.
                        </Text>

                        <Button
                            bg="blue"
                            color="#fff"
                            mt={"20px"}
                            onClick={() => setIsOpenUpdate(true)}
                        >
                            Update Account
                        </Button>
                    </Box>
                    <Box
                        bg="white"
                        border="2px dashed grey"
                        borderRadius="4px"
                        p={4}
                        color="#000"
                        width="100%"
                        minWidth={{ md: 1000 }}
                        sx={{ mt: 5, mb: 5 }}
                    >
                        <Text
                            fontSize={{ xs: "18px", md: "24px" }}
                            fontWeight="bold"
                        >
                            Delete Account
                        </Text>
                        <Text fontSize={{ xs: "14px", md: "16px" }}>
                            You can delete your account by clicking "Delete
                            Account" below.
                        </Text>
                        <Text color="red" fontSize={{ xs: "14px", md: "16px" }}>
                            Please note: this action cannot be undone and all
                            data associated with this account will be lost
                            forever.
                        </Text>
                        <Button
                            bg="red"
                            color="#fff"
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
                                        <Button
                                            ref={cancelRef}
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            colorScheme="red"
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
        </>
    );
}
