const PrismaClient = require('@prisma/client').PrismaClient

const prisma = new PrismaClient()

async function main(){
  await Promise.all([
    prisma.table.findUnique({
      where: {
        field: Buffer.from('Hello World') // some buffer 1
      },
    }),
    prisma.table.findUnique({
      where: {
        field: Buffer.from('Hello World') // same or different from buffer 1
      },
    }),
  ])
}

main()
