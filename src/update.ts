import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function update() {
  const update = await prisma.courses.update({
    where: {
      id: "ebd76d02-9681-491a-8073-29c5002d10b4",
    },
    data: {
      duration: 300,
    },
  });
  console.log(update);
}
update();
