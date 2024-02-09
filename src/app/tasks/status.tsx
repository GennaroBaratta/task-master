"use client"

import { Task } from "@prisma/client";
import { useState } from "react";

export async function Status({ row }: {
    row: Task
}) {

    const [status, setStatus] = useState(row.status === 'completed')
    return (
        <span>
            {/* {row.status}
            <input
                type="checkbox"
                checked={status}
                onChange={
                    async () => {
                        setStatus(!status)

                    }
                } /> */}
        </span>
    );
}
