// src/lib/db.ts
import { prisma } from "../lib/prisma";

export const getAllChecklists = async () => {
  return await prisma.checkList.findMany({
    include: {
      client: true,
      vehicle: true,
    },
    orderBy: {
      xata_createdat: "desc",
    },
  });
};
