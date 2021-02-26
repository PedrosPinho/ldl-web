import React, { useState, useEffect } from 'react';
import { Fdb } from "../config/firebase";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const TableScore = ({ classes, currentVersion }) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (currentVersion) {
            Fdb.ref(`/versions/${currentVersion}/teams`).once('value').then((snapshot) => {
                const teams = Object.values(snapshot.val());
                let tempRows = teams.map(t => { return { name: t.name, points: t.points } });
                setRows(tempRows.sort((a, b) => {
                    return b.points - a.points;
                }));
                setLoading(false);
            });
        }
    }, [currentVersion]);

    return <TableContainer className={classes.table} component={Paper}>
        <Table size="small" aria-label="tabela de pontos" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell align="left"><b>Time</b></TableCell>
                    <TableCell align="left"><b>Pontuação</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {loading ? 'Carregando informações...' : rows.map((row) => (
                    <TableRow key={Math.random()}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left">{row.points}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default TableScore;