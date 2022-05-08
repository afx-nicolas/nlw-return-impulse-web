import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: ['query'], // Log all operations on the console
});
