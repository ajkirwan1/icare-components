import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'icare-button',
  styleUrl: 'icare-button.scss',
  shadow: true,
})
export class IcareButton {
  @Prop() label = 'Click';
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return (
      <Host>
      <button>
        <slot>{this.label}</slot>
      </button>
      </Host>
    );
  }
}
