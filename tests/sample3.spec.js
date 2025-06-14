/*const {test,expect}=require('@playwright/test')
test.beforeAll('beforeall',async({page})=>{
    console.log('beforeall')

})
test.afterAll('aftereall',async({page})=>{
    console.log('beforeall')

})
test.beforeEach('beforeach',async({page})=>{
    console.log('beforeall')

})
test.afterEach('aftereach',async({page})=>{
    console.log('beforeall')

})
test("It is First Test Script", async ({page})=>{
    expect("GenTech Academy".endsWith("Academy")).toBeTruthy()
})
 
test("It is Second Test Script", async ({page})=>{
    expect("GenTech Academy".startsWith("GenTech")).toBeTruthy()

})*/

const {test, expect} = require("@playwright/test")
test("It executes beforeAll TestScript", async ({page})=>{
    console.log("It executes beforeAll TestScript");
   
})
 
test("It executes beforeEach of All available TestScript", async ({page})=>{
   console.log("It executes beforeEach TestScript");
})
 
test("It is First Test Script", async ({page})=>{
    expect("GenTech Academy".endsWith("Academy")).toBeTruthy()
})
 
test("It is Second Test Script", async ({page})=>{
    expect("GenTech Academy".startsWith("GenTech")).toBeTruthy()
})
 
test("It executes AfterEach TestScript", async ({page})=>{
    console.log("It executes AfterEach TestScript");
})
 
test("It executes AfterAll of All available TestScript", async ({page})=>{
    console.log("It executes AfterAll TestScript");
})