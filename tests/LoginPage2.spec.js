
const {test,expect}=require('@playwright/test')
test('Login page',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Display & Validate Page URL
    const pageUrl=await page.url()
    console.log('Page URl is',pageUrl)
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    
    //Display & Validate Page Title
    const pageTitle=await page.title()
    console.log('Page Title is', pageTitle)
    await expect(page).toHaveTitle('Automation Testing Practice')
    
    await expect(page.locator("(//div[@class='widget-content']//a)[1]")).toBeVisible()//validatethe Home page option 
    await page.locator("(//div[@class='widget-content']//a)[1]").click()//click on the Home page link

    //Validate the GUI option on Honme page
    await expect(page.getByText('GUI Elements')).toBeVisible();

    //validate the Username textbox place holder and fill the text box 
    await page.getByPlaceholder('Enter Name').fill('Admin');

   //validate the Email textbox place holder and fill the text box 
   await page.getByPlaceholder('Enter EMail').fill('P@ss1234')









    await page.close()
    
})
