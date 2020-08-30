import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

export const ColumnsCells = props => {
    const { columns, onHeader } = props
    return (
        <TableHead >
            <TableRow>
                {columns.map((cell, index) => {
                    if (cell.visibility) {
                        return (
                            <TableCell
                            key={index}
                            align={cell.align}
                            style={{ minWidth: cell.minWidth }}
                            >
                                {cell.label}
                            </TableCell>)
                    } else return null
                })}
            </TableRow>
        </TableHead>
    )
}
