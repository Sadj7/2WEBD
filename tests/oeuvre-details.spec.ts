import { test } from '@playwright/test';

test('test', async ({ page }) => {
    // Extend the default timeout for this test if needed

    await page.goto('http://localhost:5173/');

    await page
        .locator('div')
        .filter({
            hasText: /^Titre : Archangel Gabriel; The Virgin AnnunciateArtiste: Gerard DavidDétails$/,
        })
        .getByRole('button')
        .click();
    // Add a delay before the next action
    await new Promise(resolve => setTimeout(resolve, 1000));

    await page.getByRole('link', { name: 'Accueil' }).click();
    // Add a delay before the next action
    await new Promise(resolve => setTimeout(resolve, 600));

    await page.getByRole('button', { name: '>' }).click();
    // Add a delay before the next action
    await new Promise(resolve => setTimeout(resolve, 600));

    await page
        .locator('div')
        .filter({ hasText: /^Artiste: Charles W\. WoolnoughDétails$/ })
        .getByRole('button')
        .click();
    // Add a delay before the next action
    await new Promise(resolve => setTimeout(resolve, 1000));

    await page.getByRole('link', { name: 'Accueil' }).click();
    // Add a delay before the next action
    await new Promise(resolve => setTimeout(resolve, 600));
});
