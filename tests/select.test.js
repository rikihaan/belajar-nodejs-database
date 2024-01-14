import {prismaClient} from "../src/prisma-client";
describe('Prisma Client With Select', () => {
    it('Should be able create and select', async () => {
        const custumers = await prismaClient.custumer.create({
            data:{
                id:"erwin",
                email:"erwin@gmail.com",
                phone:"1234758",
                name:"Erwin Hadi"
            },
            select:{
                id:true,
                name:true
            }
        })

        expect(custumers.id).toBe("erwin");
        expect(custumers.name).toBe("Erwin Hadi");
        expect(custumers.email).toBeUndefined();
        expect(custumers.phone).toBeUndefined();

    });

    it('should be able to findMany with select', async() => {
        const custumers = await prismaClient.custumer.findMany({
            select:{
                id:true,
                name:true
            }
        })

        for (const custumer of custumers) {
            expect(custumer.id).toBeDefined()
            expect(custumer.phone).toBeUndefined()
            expect(custumer.email).toBeUndefined()
            expect(custumer.name).toBeDefined()
        }
    });
});