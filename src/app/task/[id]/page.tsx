// app/page.task.[id].tsx

import Link from 'next/link';
import { api } from '~/trpc/server';

export default async function TaskDetailsPage({ params }: { params: { id: string } }) {
    // const session = await getServerAuthSession();
    // if (!session?.user) return null;

    const task = await api.task.getById.query({ id: +params.id });
    return (
        <div className="container mx-auto px-4">
            {!task ?
                <p>Task not found</p>
                :
                <>
                    <h1 className="text-2xl font-bold">Task Details: {task.title}</h1>
                    <p>{task.description}</p>
                    <p>{task.status}</p>
                    {/*  <p>{params.task.priority}</p>
            <p>{params.task.assignedTo}</p>
            <p>{params.task.assignedBy}</p>
            <p>{params.task.createdAt}</p>
            <p>{params.task.updatedAt}</p>
            <p>{params.task.dueDate}</p>
            <p>{params.task.completedAt}</p>
            <p>{params.task.deletedAt}</p>
            <p>{params.task.deletedBy}</p> */}
                </>
            }

            <Link href="/tasks"
                className="mt-4 inline-block bg-gray-500 text-white py-2 px-4 rounded">
                Back to Tasks
            </Link>
        </div>
    );
}
