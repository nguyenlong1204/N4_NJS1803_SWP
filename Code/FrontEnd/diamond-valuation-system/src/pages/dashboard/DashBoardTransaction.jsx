import { Table, TableContainer, Thead,Tr,Th,Tbody,Td, Skeleton, Box, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { getCustomerTransaction } from "../../service/GetCustomerTransaction";
import { UserContext } from './../../components/GlobalContext/AuthContext';
import { format } from 'date-fns';
export default function DashBoardTransaction() {
    const [transaction, setTransaction] = useState([]);
    const auth = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {        
        const fetchApi = async (id) => {
            try {
                const result = await getCustomerTransaction(id);
                setTransaction(result);
                setLoading(false);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi(auth.userAuth.id);
    },[])
    return (
        <Box bg="gray.600" color="white" mb={5} boxShadow="sm" borderRadius="md" maxW="100%" minW="100%">
            <Text py={3} fontSize="lg" pl={4}>
                TRANSACTIONS
            </Text>
            <TableContainer >
            <Table variant="simple" bg="gray.200" color="black">
                <Thead>
                    <Tr>
                        <Th color="black">No</Th>
                        <Th color="black">Transaction No</Th>
                        <Th color="black">Name</Th>
                        <Th color="black">Bank</Th>
                        <Th color="black">Amount</Th>
                        <Th color="black">Date</Th>
                        <Th color="black">Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        loading && (
                            <>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                            <Tr>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                                <Td><Skeleton height='20px' /></Td>
                            </Tr>
                            </>
                        )
                    }
                    {
                        transaction && (
                            transaction.map((transaction,index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{index+1}</Td>
                                        <Td>{transaction.transaction}</Td>
                                        <Td>{transaction.customername}</Td>
                                        <Td>{transaction.bank}</Td>
                                        <Td>{new Intl.NumberFormat('vi-VN').format(transaction.amount)}</Td>
                                        <Td>{format(new Date(transaction.date), 'dd/MM/yyyy HH:mm:ss')}</Td>
                                        <Td>{transaction.order_info}</Td>
                                    </Tr>
                                )
                            })

                        ) 
                    }
                </Tbody>
            </Table>
        </TableContainer>
        </Box>
        
    );
}
