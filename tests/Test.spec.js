const {test,expect}=require('@playwright/test');
const { type } = require('os');
test('Home Page',async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})