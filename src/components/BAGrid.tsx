import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type PropsType = {
    datasource: any[],
    gridCols: {
        key: string,
        label: string,
        displayField?: any
    }[]
}

export default function BAGrid(props: PropsType) {
    const { datasource, gridCols } = props;

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {gridCols.map((col, ind) => (
                            <TableCell key={ind}>{col.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datasource.map((row, rowIndex) => (
                        <TableRow key={rowIndex} >
                            {gridCols.map((col, colIndex) => (
                                <TableCell key={colIndex}>
                                    {col.displayField ? col.displayField(row) : row[col.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
