import {prismaClient} from "../src/prisma-client";

describe('Prisma Client CRUD MANY', () => {
    it('should be able to create many', async() => {
            const {count} = await prismaClient.custumer.createMany({
                data:[
                    {
                        id:"hasan",
                        email:"hasan@gmail.com",
                        phone:"23456",
                        name:"Hasan Aja"
                    },
                    {
                        id:"suryana",
                        email:"suryana@gmail.com",
                        phone:"477384372",
                        name:"Suryana Assalas"
                    }
                ]
            })

            expect(count).toBe(2);
    });

    it('should be able to update many', async() => {
        const {count} = await prismaClient.custumer.updateMany({
            data:{
                email:"asepriki2017@gmail.com"
            },
            where:{
                id:"riki"
            }
        })

        expect(count).toBe(1);
    });

    it('should be able to delete many', async() => {
        const {count} = await prismaClient.custumer.deleteMany({
           
            where:{
                email:"asepriki2017@gmail.com"
            }
        })

        expect(count).toBe(1);
    });

    it('should be able to reade many', async () => {
        const custumers = await prismaClient.custumer.findMany({});
        expect(custumers.length).toBe(5)
    });
});