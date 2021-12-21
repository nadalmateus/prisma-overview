import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findOne() {
  const findOne = await prisma.courses.findFirst()
  console.log(findOne)
}
findOne()
