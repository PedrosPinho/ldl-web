import React, { useState, useEffect } from 'react';
import { Fdb } from "../config/firebase";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const TableHistory = ({ classes, currentVersion }) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (currentVersion) {
            Fdb.ref(`/versions/${currentVersion}/matches`).once('value').then((snapshot) => {
                const matches = Object.values(snapshot.val());
                let tempRows = matches.map(t => {
                    return {
                        name1: t?.blue?.name,
                        name2: t?.red?.name,
                        winner: t?.winner,
                        round: t?.round,
                    }
                });
                setRows(tempRows.sort((a, b) => {
                    return a.round - b.round;
                }));
                setLoading(false);
            });
        }
    }, [currentVersion]);

    return <TableContainer className={classes.table} component={Paper}>
        <Table size="small" aria-label="tabela de pontos" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell align="left"><b>Rodada</b></TableCell>
                    <TableCell align="left"><b>Time Blue Side</b></TableCell>
                    <TableCell align="left"><b>Time Red Side</b></TableCell>
                    <TableCell align="left"><b>Vencedor</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={Math.random()}>
                        <TableCell component="th" scope="row">
                            {row.round}
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