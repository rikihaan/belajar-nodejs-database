import { prismaClient } from "../src/prisma-client";

describe('Test Prisma Client', () => {
    it('should be able to query sql', async () => {
        const id ="id";
        const samples = await prismaClient.$queryRaw`SELECT * FROM sample`;

        for(const sample of samples){
            console.info(`Result sample id: ${sample.id} and name ${sample.name}`)
        }
    });
});