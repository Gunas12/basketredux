import React from 'react'
import { useState, useEffect, } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handleBasket } from '../counterSlice';
import { Button1 } from '../styles'


function Index() {
    const Basket = useSelector(state => state.counter.value)
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const handleBasket1 = (item) => {
        dispatch(handleBasket(item))

    }
    console.log(Basket);

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products`)
            .then(res => setData(res.data));
    }, []);
    return (
        <>

            <Container className="mt-5" >
                <TableContainer component={Paper} className="border border-info" >
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead  >
                            <TableRow>
                                <TableCell >#</TableCell>
                                <TableCell>Prwoduct Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Add basket</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{data.map((row) => (
                            <TableRow key={row?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row?.id}</TableCell>
                                <TableCell>{row?.name}</TableCell>
                                <TableCell>{row?.quantityPerUnit}</TableCell>
                                <TableCell>{row?.unitPrice} </TableCell>
                                <TableCell><Button1 onClick={() => handleBasket1(row)} className='button2'><h3><i className={`bi bi-basket  ${Basket.find(x => x?.id === row.id) ? "text-success" : "text-muted"}`}></i></h3></Button1></TableCell>
                            </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default Index