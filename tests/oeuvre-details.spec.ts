import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .locator("div")
    .filter({
      hasText:
        /^Titre : Archangel Gabriel; The Virgin AnnunciateArtiste: Gerard DavidDétails$/,
    })
    .getByRole("button")
    .click();
  await page.getByRole("link", { name: "Accueil" }).click();
  await page.getByRole("button", { name: ">" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Artiste: Charles W\. WoolnoughDétails$/ })
    .getByRole("button")
    .click();
  await page.getByRole("link", { name: "Accueil" }).click();
});
