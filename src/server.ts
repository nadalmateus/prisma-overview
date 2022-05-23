import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "NodeJS",
      duration: 200,
      description: "TS"
    },
  });
  console.log(result);
}


main();
