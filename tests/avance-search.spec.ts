import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Click on the search placeholder
  await page.getByPlaceholder("Une recherche...").click();
  // Add a delay before the next action
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Fill the search input
  await page.getByPlaceholder("Une recherche...").fill("Hunter");
  // Add a delay before the next action
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Click on the search button
  await page.getByRole("button", { name: "🔍" }).click();
});
