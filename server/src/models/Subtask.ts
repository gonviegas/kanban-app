import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Subtask", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    isCompleted: t.exposeBoolean("isCompleted")
  })
})

// builder.queryField("subtasks", (t) => t.prismaField({
//   type: ["Subtask"],
//   resolve: async (query, root, args, ctx, info) => {
//     return prisma.subtask.findMany({ ...query })
//   }
// }))
