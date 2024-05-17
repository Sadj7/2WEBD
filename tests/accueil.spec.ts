import { test } from '@playwright/test';

test('faire déffilé avec les boutton fléche les oeuvre mis en avant', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    async function clickWithDelay(selector, delay, clickCount = 1) {
        for (let i = 0; i < clickCount; i++) {
            await page.getByRole('button', { name: selector }).click();
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    // Click the button 8 times with a 2-second delay between each click
    for (let i = 0; i < 8; i++) {
        await clickWithDelay('>', 600);
    }

    // Click the button 5 more times with a 2-second delay between each click
    await clickWithDelay('>', 600, 5);

});