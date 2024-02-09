import Link from "next/link";

import { CreatePost } from "~/app/components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="inline-flex flex-col items-start bg-gradient-to-b from-[#ffffff] to-[#d5d7ff] ">

      <Navbar>
        
      </Navbar>

      {session ? <Link href="/tasks"
        className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded">
        View Tasks
      </Link> : null}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello ? hello.greeting : "Loading tRPC query..."}
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
          >
            <Button>
              {session ? "Sign out" : "Sign in"}
            </Button>
          </Link>
        </div>
      </div>

      <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
