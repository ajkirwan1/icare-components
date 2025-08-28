import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'icare-web-minihero',
  styleUrl: 'icare-web-minihero.scss',
  shadow: true,
})
export class IcareWebMinihero {

  @Prop() imgSrc: string;
  @Prop() imgAlt = 'Mini Hero Title';

  render() {
    return (
      <Host>
        <section>
          <img src={this.imgSrc} alt={this.imgAlt} />
          <div class="overlay" />
          <div class="content">
            <h3>
              <slot name="header"></slot>
            </h3>
            <p>
              <slot name="text"></slot>
              </p>
            <icare-button variant='secondary'>Click Me</icare-button>
          </div>
        </section>
      </Host>
    );
  }
}
