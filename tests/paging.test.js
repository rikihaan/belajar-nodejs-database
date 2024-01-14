import {prismaClient} from "../src/prisma-client.js";
describe('Prisma Client', () => {
   it('should able to paging findMany', async () => {
        const page1 = await prismaClient.custumer.findMany({
            skip:0,
            take:1
        });

        expect(page1.length).toBe(1);

        const page2 = await prismaClient.custumer.findMany({
            skip:1,
            take:1
        });

        expect(page2.length).toBe(1);

        const page3 = await prismaClient.custumer.findMany({
            skip:2,
            take:1
        });

        expect(page3.length).toBe(1);
   });  
});