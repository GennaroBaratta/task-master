import { Task } from "@prisma/client"
import { useMutation } from "@tanstack/react-query";
import { CellContext, ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { Row } from "@tanstack/react-table";
import { api } from "~/trpc/react";
import TasksTableCell from "./cell";


const columns: ColumnDef<Task>[] = [
    {
        header: 'title',
        accessorKey: 'title',

        cell: TasksTableCell
        // other properties...
    },
    { accessorKey: "description", header: "Description", cell: TasksTableCell },
    {
        accessorKey: "status", header: "Status",
        cell: ({ row }) => {
            const check = api.task.update.useMutation({
                onSuccess: () => {
                    console.log('success');

                }
            })

            return (
                <input
                    type="checkbox"
                    checked={row.original.status === 'completed'}
                    onChange={
                        async () => {
                            check.mutate({ ...row.original, status: row.original.status === 'completed' ? 'pending' : 'completed' })
                            row.original.status = row.original.status === 'completed' ? 'pending' : 'completed'
                        }
                    } />
            )
        }
    },
    {
        accessorKey: "delete", header: "Delete",
        cell: ({ row }) => {
            const deleteTask = api.task.delete.useMutation({
                onSuccess: () => {
                    //delete row

                }
            })
            return (
                <button onClick={async () => deleteTask.mutate({ id: row.original.id })}>Delete</button>
            )
        }
    }

];

export default columns;
// export default async function columns(): Promise<ColumnDef<Task>[]> {
//     return [
//         {
//             accessorKey: "title",
//             header: "Title",
//         },
//         {
//             accessorKey: "description",
//             header: "Description",
//         },
//         {
//             accessorKey: "status",
//             header: "Status",
//             cell: ({ row }) => {


//                 return (
//                     <input
//                         type="checkbox"
//                         checked={row.original.status === 'completed'}
//                         onChange={
//                             async () => {
//                                 // await fetch(`/api/tasks/${row.original.id}`, {
//                                 //     method: 'PATCH',
//                                 //     body: JSON.stringify({
//                                 //         status: row.original.status === 'completed' ? 'pending' : 'completed'
//                                 //     })
//                                 // })
//                                 // row.original.status = row.original.status === 'completed' ? 'pending' : 'completed'
//                             }
//                         } />
//                 )
//             }
//         },
//     ]
// }