import { newSpecPage } from '@stencil/core/testing';
import { FrButton } from '../fr-button';

describe('fr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrButton],
      html: `<fr-button text="button-text"></fr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fr-button text="button-text">
        <mock:shadow-root>
          <button class="button">button-text</button>
        </mock:shadow-root>
      </fr-button>
    `);
  });
});
