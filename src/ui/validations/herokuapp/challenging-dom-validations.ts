import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ChallengingDomPage } from '@pages/herokuapp/challenging-dom-page';
import { expect, type Page } from '@playwright/test';
export class ChallengingDomValidations {
  private readonly optionPage: ChallengingDomPage;
  constructor(private readonly page: Page) {
    this.optionPage = new ChallengingDomPage(page);
  }

  async expectDynamicIdToChange(): Promise<void> {
    await expect(this.optionPage.dynamicButtons.first()).not.toHaveAttribute(
      'id',
      requireScenarioValue<string>(this.page, 'dynamicButtonIdBefore'),
    );
  }

  async expectTableVisible(): Promise<void> {
    await expect(this.optionPage.dataTable).toBeVisible();
  }

  async expectUrlAction(action: string): Promise<void> {
    await expect(this.page).toHaveURL(url => url.hash === `#${action}`);
  }

  async expectRowVisible(position: 'first' | 'last'): Promise<void> {
    await expect(position === 'first' ? this.optionPage.rows.first() : this.optionPage.rows.last()).toBeVisible();
  }

  async expectNoNonexistentAction(): Promise<void> {
    await expect(this.optionPage.rows.nth(10)).toHaveCount(0);
  }

  async expectRowsUnchanged(): Promise<void> {
    await expect(this.optionPage.rows).toHaveText(requireScenarioValue<string[]>(this.page, 'challengingRows'));
  }

  async expectFinalRowComplete(): Promise<void> {
    await expect(this.optionPage.rows.last().locator('td')).toHaveCount(7);
    await expect(this.optionPage.rows.last().getByRole('link')).toHaveCount(2);
  }

  async expectCanvasDimensions(): Promise<void> {
    const dimensions = await this.optionPage.canvas.evaluate(canvas => ({
      width: (canvas as HTMLCanvasElement).width,
      height: (canvas as HTMLCanvasElement).height,
    }));
    expect(dimensions.width).toBeGreaterThan(0);
    expect(dimensions.height).toBeGreaterThan(0);
  }
}
