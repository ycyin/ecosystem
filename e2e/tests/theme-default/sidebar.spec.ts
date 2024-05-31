import { expect, test } from '@playwright/test'

test.describe('has heading sidebar', () => {
  /**
   * sidebar no support heading
   */
  // test('frontmatter', async ({ page }) => {
  //   await page.goto('sidebar/auto.html')

  //   const sidebarItems = page.locator('a.sidebar-item')

  //   await expect(sidebarItems.nth(0)).toContainText('Sidebar Heading 1')
  //   await expect(sidebarItems.nth(1)).toContainText('Sidebar Heading 2')
  // })

  test('config', async ({ page }) => {
    await page.goto('sidebar/heading/1.html')

    const sidebarHeadings = page.locator('.vp-sidebar-item.level-1')
    const pageTitle = page.locator('.vp-content h1')

    const pageTitleText = (await pageTitle.innerText()).replace('#', '')

    await expect(pageTitle).not.toBeEmpty()
    await expect(sidebarHeadings.first()).toContainText(pageTitleText)

    const h2 = page.locator('.vp-content h2').first()

    await expect(h2).not.toBeEmpty()
  })
})

test('has configured sidebar', async ({ page }) => {
  await page.goto('sidebar/config/1.html')

  const sidebarItems = page.locator('#VPSidebarNav .vp-link')

  await expect(sidebarItems.nth(0)).toContainText('sidebar 1')
  await expect(sidebarItems.nth(1)).toContainText('sidebar 2')
})
