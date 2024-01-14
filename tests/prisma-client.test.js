import { PrismaClient } from "@prisma/client";

describe('Prisma Client', () => {
    it("should be able to connet database",async()=>{
        const prisma = new PrismaClient();
        prisma.$connect();
        console.info("Database connected")
        await prisma.$disconnect();
    })
    
});