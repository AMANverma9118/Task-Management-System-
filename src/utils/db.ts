import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectToDB() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1);
  }
}

export { prisma, connectToDB };
