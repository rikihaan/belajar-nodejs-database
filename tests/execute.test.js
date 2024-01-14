import { prismaClient } from '../src/prisma-client.js'

describe('Prisma Client', () => {
    it('should be able to execute sql', async() => {
        const id = "id";
        const name = "Asep Riki";

        const impected = await prismaClient.$executeRaw`INSERT INTO sample (id,name) VALUES(${id},${name})`;
        expect(impected).toBe(1);
    });
    
});