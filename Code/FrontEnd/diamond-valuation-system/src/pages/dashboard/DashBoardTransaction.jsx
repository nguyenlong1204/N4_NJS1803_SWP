import { Table, TableContainer, Thead,Tr,Th,Tbody,Td, Skeleton } from "@chakra-ui/react";
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
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Transaction No</Th>
                        <Th>Name</Th>
                        <Th>Bank</Th>
                        <Th>Amount</Th>
                        <Th>Date</Th>
                        <Th>Description</Th>
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
    );
}
