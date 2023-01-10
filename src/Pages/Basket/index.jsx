import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handleDel, Increment, Decrement } from '../counterSlice';
import { v4 as uuidv4 } from 'uuid';

import "bootstrap-icons/font/bootstrap-icons.css";
import { Button1, Button2 } from '../styles';

function Index() {
    const Basket = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const handleDel1 = (item) => {
        dispatch(handleDel(item))
    }
    const ItemIncre = (item) => {
        dispatch(Increment(item))
    }
    const ItemDecre = (item) => {
        dispatch(Decrement(item))
    }
    return (
        <>
            <Container className="mt-5">
                <TableContainer component={Paper} className="border border-info">
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell >#</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{Basket.map((row) => (

                            <TableRow key={uuidv4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.data.id}</TableCell>
                                <TableCell>{row.data.name}</TableCell>
                                <TableCell>{row.data.quantityPerUnit}</TableCell>
                                <TableCell>{row.data.unitPrice}</TableCell>

                                <TableCell><h4>
                                    <Button2 onClick={() => ItemDecre(row.data)}><i>-</i></Button2>
                                    {row.count}
                                    <Button2 onClick={() => ItemIncre(row.data)}><i>+</i></Button2>
                                    <Button1 className="border-0 bg-white" onClick={() => handleDel1(row.data)} ><i className="bi bi-trash3-fill text-danger"></i></Button1></h4>
                                </TableCell>
                            </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}
export default Index