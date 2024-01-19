import { prismaClient } from "../src/prisma-client";

describe('Prisma client', () => {
   it('should be able to with condition Or where', async () => {
        const products = await prismaClient.product.findMany({
            where:{
                OR:[
                    {name:"A"},
                    {name:"B"}
                ]
            },
            orderBy:[
                {
                    name:"asc"
                }
            ]
        })

        console.info(products)

        expect(products).toHaveLength(2);
        expect(products[0].name).toBe("A")
        expect(products[1].name).toBe("B")
   }); 
});