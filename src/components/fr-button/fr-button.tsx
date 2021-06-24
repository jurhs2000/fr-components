import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'fr-button',
  styleUrl: 'fr-button.scss',
  shadow: true,
})
export class FrButton {

  /**
   * Text to be present on the button
   */
  @Prop() text: string;

  render() {
    return (
      <Host>
        <button class="button">{this.text}</button>
      </Host>
    );
  }

}
