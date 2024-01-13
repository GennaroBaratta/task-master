

import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
    create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          title: input.title,
          description: "", // Add this line
          status: "", // Add this line
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany({
      where: { user: { id: ctx.session.user.id } },
    });
  }),
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input,  }) => {
    return ctx.db.task.findFirst({
      where: { id: input.id, user: { id: ctx.session.user.id } },
    });
  }),
});
