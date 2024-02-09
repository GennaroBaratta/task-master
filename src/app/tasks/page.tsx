// app/page.tasks.tsx
import Link from 'next/link';
import { CreateTask } from '../components/create-task';
import { api } from '~/trpc/server';
import { Button } from '../components/ui/button';
import { DataTable } from "./data-table"
import { Task } from '@prisma/client';

export default async function TaskListPage() {

    const tasks: Task[] = await api.task.getAll.query({});

    return (
        <div className="container mx-auto px-4">
            <CreateTask></CreateTask>
            <h1 className="text-2xl font-bold">Tasks</h1>

            <DataTable
                data={tasks}
            />
            <Link href="/">
                <Button>
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}

