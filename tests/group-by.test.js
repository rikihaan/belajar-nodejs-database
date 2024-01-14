import {prismaClient} from "../src/prisma-client";

describe('PrismaClient Group by', () => {
    it('Should be able quey aggregate and ground By', async () => {
        const result = await prismaClient.product.groupBy({
            by:['category'],
            _min:{
                price:true
            },
            _max:{
                price:true
            },
            _avg:{
                price:true
            }
        })
        expect(result._min).toBe()
    });
});