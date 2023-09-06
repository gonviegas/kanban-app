import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Column", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    tasks: t.relation("tasks")
  })
})

// builder.queryField("columns", (t) => t.prismaField({
//   type: ["Column"],
//   resolve: async (query, root, args, ctx, info) => {
//     return prisma.column.findMany({ ...query })
//   }
// }))
