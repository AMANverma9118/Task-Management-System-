import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Connect to the database and confirm
async function connectToDB() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1); // Exit the app if DB fails
  }
}

export { prisma, connectToDB };
