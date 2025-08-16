import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icare-logo',
  styleUrl: 'icare-logo.scss',
  shadow: true,
})
export class IcareLogo {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
