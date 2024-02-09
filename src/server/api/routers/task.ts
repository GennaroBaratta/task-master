import type { PrismaPromise } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,

} from "~/server/api/trpc";

import cache from '~/utils/cache';

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

  getAll: publicProcedure
    .input(z.object({ userIdz: z.string().optional() }))
    .query(({ ctx, input }) => {
      const cacheKey = !!input.userIdz ?
        input.userIdz :
        (!!ctx?.session?.user?.id ? ctx.session.user.id : '')
        ;

      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)  as PrismaPromise<{
          id: number;
          title: string;
          description: string;
          status: string;
          userId: string;
      }[]>;
      }
      const data = ctx.db.task.findMany({
        where: { user: { id: !!input.userIdz ? ctx?.session?.user.id : input.userIdz } },
      });
      // cache.set(cacheKey, data);
      return data;
    }),
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input, }) => {
      return ctx.db.task.findFirst({
        where: { id: input.id, user: { id: ctx.session.user.id } },
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1),
      description: z.string(),
      status: z.string()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.db.task.update({
        where: { id: input.id, user: { id: ctx.session.user.id } },
        data: {
          title: input.title,
          description: input.description,
          status: input.status
        },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.task.delete({
        where: { id: input.id, user: { id: ctx.session.user.id } },
      });
    }),
});
