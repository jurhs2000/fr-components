import { newE2EPage } from '@stencil/core/testing';

describe('fr-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fr-button></fr-button>');

    const element = await page.find('fr-button');
    expect(element).toHaveClass('hydrated');
  });
});
