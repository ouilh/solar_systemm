import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export function DataProvider(): PrismaClient {
    if (!prisma) {
        prisma = new PrismaClient();
    }
    return prisma;
}