import { NavigationActions } from '@actions/common/navigation-actions';
import { requireScenarioValue, setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { type Page } from '@playwright/test';
export type HttpAuthType = 'basic' | 'digest' | 'secure';
const PATHS: Record<HttpAuthType, string> = {
  basic: '/basic_auth',
  digest: '/digest_auth',
  secure: '/download_secure',
};
const BASE_URL = process.env.BASE_URL ?? 'https://the-internet.herokuapp.com';
export class HttpAuthenticationActions {
  private readonly navigationActions: NavigationActions;
  constructor(private readonly page: Page) {
    this.navigationActions = new NavigationActions(page);
  }

  async openAuthenticatedPage(type: HttpAuthType): Promise<void> {
    await this.navigationActions.navigateTo(PATHS[type]);
  }

  async reloadAuthenticatedPage(): Promise<void> {
    await this.navigationActions.reloadPage();
  }

  async leaveAndRevisit(type: HttpAuthType): Promise<void> {
    await this.navigationActions.navigateTo('/');
    await this.openAuthenticatedPage(type);
  }

  prepareCredentials(type: HttpAuthType, username: string, password: string): void {
    setScenarioValue(this.page, `${type}Credentials`, { username, password });
  }

  async requestPreparedCredentials(type: HttpAuthType): Promise<void> {
    const credentials = requireScenarioValue<{ username: string; password: string }>(this.page, `${type}Credentials`);
    await this.requestWithIsolatedCredentials(type, credentials.username, credentials.password);
  }

  async requestWithIsolatedCredentials(type: HttpAuthType, username: string, password: string): Promise<void> {
    const browser = this.page.context().browser();
    if (!browser) throw new Error('The current page has no browser');
    const context = await browser.newContext({
      httpCredentials: { username, password, origin: BASE_URL },
    });
    try {
      const isolatedPage = await context.newPage();
      const response = await isolatedPage.goto(`${BASE_URL}${PATHS[type]}`);
      setScenarioValue(this.page, `${type}AuthStatus`, response?.status() ?? 0);
    } finally {
      await context.close();
    }
  }
}
