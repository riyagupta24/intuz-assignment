import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'

const RowCell = props => {
    const { columns, row, onCellClick } = props
    return columns.map((col, index) => {
        if (col.visibility) {
            if (col.dataType && col.dataType === 'date') {
                return <TableCell key={index} align={col.align} onClick={onCellClick}>{row[col.field] ? moment(row[col.field]).format('ll') : ''}</TableCell>
            } else if (col.dataType && col.dataType === 'number') {
                return <TableCell key={index} align={col.align} onClick={onCellClick}>{parseFloat(row[col.field])}</TableCell>
            }
            if (col.dataType && col.dataType === 'object') {
                return <TableCell key={index} align={col.align} onClick={onCellClick}>{row[col.fieldKey][col.field]}</TableCell>
            }
            return <TableCell key={index} align={col.align} onClick={onCellClick}>{row[col.field]}</TableCell>
        } else return null
    })
}

export const Rows = props => {
    const { rows, columns, onRowClick } = props
    return (
        <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                    <RowCell columns={columns} row={row} onCellClick={e => onRowClick(e, row)} />
                </TableRow>
            ))}
        </TableBody>
    )
}
