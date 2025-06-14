
const { test, expect } = require('@playwright/test');

test('its first test', function display({ page }) {
    console.log('its first test')

});
test('its second test', function({ page }) {
    console.log('its second test')

});
test('its third test', async({ page })=> {
    console.log('its second test')

});
