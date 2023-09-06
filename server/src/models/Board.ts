import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Board", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    // columns: t.relation("columns")
  })
})

// builder.queryField("boards", (t) => t.prismaField({
//   type: ["Board"],
//   resolve: async (query, root, args, ctx, info) => {
//     return prisma.board.findMany({ ...query })
//   }
// }))
