// app/page.tasks.tsx

import Link from 'next/link';
import { CreateTask } from '../_components/create-task';
import { getServerAuthSession } from '~/server/auth';
import { api } from '~/trpc/server';

export default async function TaskListPage() {
    // const session = await getServerAuthSession();
    // if (!session?.user) return null;

    const tasks = await api.task.getAll.query();
    return (
        <div className="container mx-auto px-4">
            <CreateTask></CreateTask>
            <h1 className="text-2xl font-bold">Tasks</h1>
            {Object.values(tasks).map((task) => (
                <div key={task.id} className="flex items-center gap-4">
                    <input type="checkbox" />
                    <p>{task.title}</p>
                    <Link href={`/task/${task.id}`}
                        className="mt-4 inline-block bg-gray-500 text-white py-2 px-4 rounded">
                        View
                    </Link>
                </div>
            ))
            }
            <Link href="/"
                className="mt-4 inline-block bg-gray-500 text-white py-2 px-4 rounded">
                Back to Home
            </Link>
        </div>
    );
}

