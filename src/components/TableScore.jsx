import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

function createData(name, pts) {
    return { name, pts };
}

const rows = [
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2),
    createData('Descalboys e Lavakigor', 2)
];

const TableScore = ({ classes }) => {
    return <TableContainer className={classes.table} component={Paper}>
        <Table size="small" aria-label="tabela de pontos" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell align="left"><b>Time</b></TableCell>
                    <TableCell align="left"><b>Pontuação</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={Math.random()}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left">{row.pts}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default TableScore;