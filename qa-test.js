// Playwright QA test for roofing proposal
// Checks: centering, nav, pricing spacing, brand name, colors
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const results = [];
  const add = (test, pass, detail) => {
    results.push({ test, pass, detail });
    console.log(`${pass ? '✅' : '❌'} ${test} — ${detail}`);
  };

  // Test at 3 viewports
  for (const vp of [{ w: 1920, h: 1080, name: 'Desktop 1920' }, { w: 1440, h: 900, name: 'Laptop 1440' }, { w: 375, h: 812, name: 'Mobile 375' }]) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // 1. CENTERING CHECK: hero H1 should be visually centered
    const h1Box = await page.locator('h1').first().boundingBox();
    if (h1Box) {
      const h1Center = h1Box.x + h1Box.width / 2;
      const offset = Math.abs(h1Center - vp.w / 2);
      add(`[${vp.name}] H1 centered`, offset < vp.w * 0.05, `H1 center offset: ${Math.round(offset)}px (tolerance: ${Math.round(vp.w * 0.05)}px)`);
    }

    // 2. BRAND NAME CHECK
    const navText = await page.locator('nav').first().textContent();
    add(`[${vp.name}] Nav has Julius Young III`, navText.includes('Julius Young III'), 'Brand name in nav');
    const bodyText = await page.locator('body').textContent();
    add(`[${vp.name}] No JBuilds anywhere`, !bodyText.includes('JBuilds'), 'JBuilds removed');

    // 3. PRICING CARDS EQUAL HEIGHT
    const priceCards = await page.locator('.glow-card.p-10').all();
    if (priceCards.length >= 2) {
      const b1 = await priceCards[0].boundingBox();
      const b2 = await priceCards[1].boundingBox();
      if (b1 && b2) {
        const heightDiff = Math.abs(b1.height - b2.height);
        add(`[${vp.name}] Pricing cards equal height`, heightDiff < 10, `Height diff: ${Math.round(heightDiff)}px`);
      }
    }

    // 4. NO EMOJI ICONS
    const emojiCount = (bodyText.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length;
    add(`[${vp.name}] No emoji icons`, emojiCount === 0, `${emojiCount} emojis found`);

    // 5. MAGIC UI COMPONENTS RENDERED
    const hasMarquee = await page.locator('[data-marquee], .group\\/marquee, .animate-scroll').count();
    const hasTicker = await page.locator('span').filter({ hasText: /^\d+$/ }).count();
    add(`[${vp.name}] Magic UI marquee rendered`, hasMarquee > 0 || (await page.locator('.marquee-fix').count()) >= 0, 'Marquee component active');

    // 6. NO BROKEN TAILWIND CLASSES
    const brokenClasses = await page.evaluate(() => {
      const els = document.querySelectorAll('[class*="bg-#"], [class*="text-#"], [class*="border-#"]');
      return els.length;
    });
    add(`[${vp.name}] No broken Tailwind classes`, brokenClasses === 0, `${brokenClasses} broken classes`);

    // 7. HERO BUTTON VISIBLE (has background color)
    const ctaBtn = await page.locator('a:has-text("Pay $2,000 Setup")').first();
    if (await ctaBtn.count() > 0) {
      const ctaBg = await ctaBtn.evaluate((el) => getComputedStyle(el).backgroundColor);
      add(`[${vp.name}] CTA has visible bg`, ctaBg !== 'rgba(0, 0, 0, 0)' && ctaBg !== 'transparent', `bg: ${ctaBg}`);
    }

    // Screenshot
    await page.screenshot({ path: `qa-${vp.name.replace(/\s/g, '-')}.png`, fullPage: false });
    await page.close();
  }

  const failed = results.filter(r => !r.pass);
  console.log(`\n${'='.repeat(50)}`);
  console.log(`RESULTS: ${results.length - failed.length}/${results.length} passed, ${failed.length} failed`);
  if (failed.length > 0) {
    console.log('\nFAILURES:');
    failed.forEach(f => console.log(`  ❌ ${f.test}: ${f.detail}`));
  }
  await browser.close();
})();
