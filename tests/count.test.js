import {prismaClient} from "../src/prisma-client";

describe('Prisma Client Count', () => {
    it('should able to count', async() => {
        const total = await prismaClient.custumer.count({
            where:{
                name:"asep"
            }
        })
        expect(total).toBe(1);
    });
});