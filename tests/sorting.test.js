import {prismaClient} from "../src/prisma-client";

describe('Prisma Client', () => {
    it('should be able read many with sorting', async() => {
        const custumers = await prismaClient.custumer.findMany({
            skip:0,
            take:5,
            orderBy:[
                {
                    name:"asc"
                },
                {
                    email:"desc"
                }
            ]
        })
    
        for (const custumer of custumers) {
            console.info(custumer.name)
        }
    });
});