import NextAuth from "next-auth";

import { authOptions as o } from "~/server/auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(o);
export { handler as GET, handler as POST };