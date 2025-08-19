import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icare-logo',
  styleUrl: 'icare-logo.scss',
  shadow: true,
})
export class ICareLogo {
  render() {
    return (
      <Host>
        <img src="images/icare-logo.svg" alt="iCare Logo" />
      </Host>
    );
  }
}
