"use client"

import {
    ColumnDef,
    Row,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/app/components/ui/table"
import { Table as TableType } from "@tanstack/react-table"
import columns from "./columns"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Task } from "@prisma/client"
import { api } from "~/trpc/react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    setData: Dispatch<SetStateAction<TData[]>>
    updateData: (row: TData) => void
}


function DataTableClient<TData, TValue>({
    data,
    columns,
    setData,
    updateData
}: DataTableProps<TData, TValue>) {


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateData: (rowIndex: number, columnId: string, value: string) => {
                setData((old) =>
                    old.map((row, index) => {
                        if (index === rowIndex) {
                            return {
                                ...old[rowIndex],
                                [columnId]: value,
                            } as TData;
                        }
                        return row;
                    })
                );
                updateData({
                    ...data[rowIndex],
                    [columnId]: value,
                } as TData)
            },
        }
    })
    useEffect(() => {
        // console.log(table.getCenterRows()); console.log(data);
    }, [table])



    function onDelete(row: Row<TData>): void {
        const dataCopy = [...data];
        // It should not matter what you name tableProps. It made the most sense to me.
        dataCopy.splice(row.index, 1);
        setData(dataCopy);
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    cell.column.id === "delete" ?
                                        <TableCell key={cell.id} onClick={() => onDelete(row)}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                        :
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>

                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export function DataTable({ data }: { data: Task[] }) {
    const [, setData] = useState<Task[]>(data)
    const updateMutation = api.task.update.useMutation({
        onSuccess: () => {

        }
    })
    const updateData = (task: Task) => {
        updateMutation.mutate({ ...task })
    }
    return (
        <DataTableClient
            columns={columns}
            data={data}
            setData={setData}
            updateData={updateData}
        />
    )
}