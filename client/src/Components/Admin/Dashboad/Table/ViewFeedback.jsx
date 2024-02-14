import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import { Port } from '../../../../Port';
import { Link } from 'react-router-dom';


export default function ViewFeedback() {
    const [data, setData] = useState([])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }


    useEffect(() => {
        // API TO GET ALL THE FEEFBACK
        axios.get(`${Port}/api/feedback/feedbackview`).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(data);

    return (
        <div>
            <Paper elevation={20}>

                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">suggestion</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: "center" }}> Visit</StyledTableCell>
                                <StyledTableCell align="center">Food</StyledTableCell>
                                <StyledTableCell align="center">Service</StyledTableCell>
                                <StyledTableCell align="center">experince</StyledTableCell>
                                <StyledTableCell align="center">recommend</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((row) => (
                                <StyledTableRow key={row._id}>

                                    <StyledTableCell align="center">{row.suggestion}</StyledTableCell>
                                    <StyledTableCell align='center' component="th" scope="row" >
                                        {row.visit}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.food}</StyledTableCell>
                                    <StyledTableCell align="center">{row.service}</StyledTableCell>
                                    <StyledTableCell align="center">{row.experince}</StyledTableCell>
                                    <StyledTableCell align="center">{row.recommend}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>

    );
}