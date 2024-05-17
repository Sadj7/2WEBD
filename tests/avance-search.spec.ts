import { test} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByPlaceholder('Une recherche...').click();
    await page.getByPlaceholder('Une recherche...').fill('Hunter');
    await page.getByRole('button', { name: '🔍' }).click();
});