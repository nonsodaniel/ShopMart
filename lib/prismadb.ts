import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient(); //added globalThis.prisma to avoid next13 hot reloading multiple instance issue
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
