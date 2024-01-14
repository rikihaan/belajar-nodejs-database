const tagFunction =(array,...args)=>{
    console.info(array);
    console.info(args);
}


describe('Prisma Client Test', () => {
   it("Tag Function Test",()=>{
    const name = "Riki";
    tagFunction `Hello ${name}!, how are you?`;
    tagFunction `Bye ${name}!, see you later!`;
   }) 

   it('tag function sql', () => {
        const name ="Riki";
        const age = 31;
        tagFunction `SELECT * FROM users WHERE name =${name} AND age =${age}`
   });
});