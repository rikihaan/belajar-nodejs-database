import {prismaClient} from "../src/prisma-client";

describe('Prisma CRUD', () => {
    it('should be able to create custumer', async () => {
      const custumer = await prismaClient.custumer.create({
        data:{
            id:"asep",
            email:"asepriki@gmail.com",
            name:"Asep Riki",
            phone:"098343789347"
        }
      })

      expect(custumer.name).toBe("Asep Riki");
      expect(custumer.id).toBe("asep");
      expect(custumer.email).toBe("asepriki@gmail.com");
      expect(custumer.phone).toBe("098343789347");
    });

    // update
    it('should be able to upade custumer', async () => {
        const custumer = await prismaClient.custumer.update({
          data:{
              name:"Asep Riki",
              phone:"12345"
          },
          where:{
            id:"asep"
          }
        })
  
        expect(custumer.name).toBe("Asep Riki");
        expect(custumer.id).toBe("asep");
        expect(custumer.email).toBe("asepriki@gmail.com");
        expect(custumer.phone).toBe("12345");
      });

      it('should be able to Read custumer', async () => {
        const custumer = await prismaClient.custumer.findUnique({
          where:{
            id:"asep"
          }
        })
  
        expect(custumer.name).toBe("Asep Riki");
        expect(custumer.id).toBe("asep");
        expect(custumer.email).toBe("asepriki@gmail.com");
        expect(custumer.phone).toBe("12345");
      });

      it('should be able to Delete custumer', async () => {
        const custumer = await prismaClient.custumer.delete({
          where:{
            id:"asep"
          }
        })
  
        expect(custumer.name).toBe("Asep Riki");
        expect(custumer.id).toBe("asep");
        expect(custumer.email).toBe("asepriki@gmail.com");
        expect(custumer.phone).toBe("12345");
      });

});