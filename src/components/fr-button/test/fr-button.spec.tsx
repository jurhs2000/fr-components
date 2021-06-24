import { newSpecPage } from '@stencil/core/testing';
import { FrButton } from '../fr-button';

describe('fr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrButton],
      html: `<fr-button></fr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fr-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fr-button>
    `);
  });
});
