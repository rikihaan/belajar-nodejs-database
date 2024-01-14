import {prismaClient} from "../src/prisma-client";

describe('Test Prisma Transaction', () => {
    it('should be able to Transaction Squensial', async() => {
        // menggunakan destructaring array
        const [asep,riki]= await prismaClient.$transaction([
            prismaClient.custumer.create({
                data:{
                    id:"asep",
                    name:"Asep",
                    email:"asepriki20114@gmail.com",
                    phone:"1234567"
                }
            }),
            prismaClient.custumer.create({
                data:{
                    id:"riki",
                    name:"Riki",
                    email:"riki@gmail.com",
                    phone:"12345678"
                }
            })
        ])

        expect(asep.name).toBe("Asep");
        expect(riki.name).toBe("Riki")
    });

    it('should be able to interative Transaction', async() => {
        // menggunakan destructaring array
        const [rendi,jaka] = await prismaClient.$transaction(async(prisma)=>{
            const rendi = await prisma.custumer.create({
                data:{
                    id:"rendi",
                    name:"Rendi",
                    email:"rendi@gmail.com",
                    phone:"1234"
                }
            });

            const jaka = await prisma.custumer.create({
                data:{
                    id:"jaka",
                    name:"Jaka",
                    email:"jaka@gmail.com",
                    phone:"12345"
                }
            })

            return [rendi,jaka]
        })

        expect(rendi.name).toBe("Rendi");
        expect(jaka.name).toBe("Jaka")
    });
});