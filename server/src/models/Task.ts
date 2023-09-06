import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Task", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
    subtasks: t.relation("subtasks")
  })
})

// builder.queryField("tasks", (t) => t.prismaField({
//   type: ["Task"],
//   resolve: async (query, root, args, ctx, info) => {
//     return prisma.task.findMany({ ...query })
//   }
// }))
