import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

function createData(date, name1, name2, winner) {
    return { date, name1, name2, winner };
}

const rows = [
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
    createData('06-02-2021', 'Descalboys e Lavakigor', 'Time 2', 'Descalboys e Lavakigor'),
];

const TableHistory = ({ classes }) => {
    return <TableContainer className={classes.table} component={Paper}>
        <Table size="small" aria-label="tabela de pontos" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell align="left"><b>Data</b></TableCell>
                    <TableCell align="left"><b>Time Blue Side</b></TableCell>
                    <TableCell align="left"><b>Time Red Side</b></TableCell>
                    <TableCell align="left"><b>Vencedor</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={Math.random()}>
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell align="left">{row.name1}</TableCell>
                        <TableCell align="left">{row.name2}</TableCell>
                        <TableCell align="left">{row.winner}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default TableHistory;