import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icare-banner',
  styleUrl: 'icare-banner.scss',
  shadow: true,
})
export class IcareBanner {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
