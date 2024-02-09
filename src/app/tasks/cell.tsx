import { useEffect, useState } from "react"
import { Input } from "../components/ui/input"
import { Column, Getter, Row, RowData, Table } from "@tanstack/react-table"
import { api } from "~/trpc/react"

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
      updateData: (rowIndex: number, columnId: string, value: string) => void
    }
  }

type TasksTableCellProps<TData> = {
    getValue: Getter<string>
    row: Row<TData>
    column: Column<TData, unknown>
    table: Table<TData>
}

export default function TasksTableCell<TData>(
    { getValue, row, column, table }:
        TasksTableCellProps<TData>) {
    const initialValue = getValue()
    const [value, setValue] = useState(initialValue)


    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value)
    }

    return (
        <input
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={onBlur}
        />
    )
}