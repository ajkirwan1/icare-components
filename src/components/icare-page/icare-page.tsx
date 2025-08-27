import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icare-page',
  styleUrl: 'icare-page.scss',
  shadow: true,
})
export class IcarePage {
  render() {
    return (
      <Host>
        <icare-header></icare-header>
        <main>
          <slot></slot>
        </main>
      </Host>
    );
  }
}
