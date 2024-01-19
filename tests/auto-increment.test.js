import { prismaClient } from "../src/prisma-client";

describe('Prisma Auto Increment', () => {
    it('should be able to excecute to sql', async () => {
        const category = await prismaClient.category.create({
            data:{
                name:"Food"
            }
        })
        console.info(category);
        expect(category).toHaveProperty("id");
    });
});