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
        console.info(result);

       for (const item of result) {
        console.info(`Category: ${item.category}, min ${item._min.price}, max  ${item._max.price}, avg:  ${item._avg.price}`)
       }
    });

    it('Should be able quey aggregate and ground By with having', async () => {
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
            },
            having:{
                price:{
                    _avg:{
                        gt:3000
                    }
                }
            }
        })
        console.info(result);
       for (const item of result) {
        console.info(`Category: ${item.category}, min ${item._min.price}, max  ${item._max.price}, avg:  ${item._avg.price}`)
       }
    });
});