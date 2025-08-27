import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'icare-web-card',
  styleUrl: 'icare-web-card.scss',
  shadow: true,
})

export class IcareWebCard {

  @Prop() imageSrc: string;
  @Prop() imageAlt: string;

  render() {
    return (
      <Host>
          <article class="content-wrapper">
           <figure class="media">
             <img src={this.imageSrc} alt={this.imageAlt} class="card-image"/>
             </figure>
            <div class="text-content">
              <h2>ICare</h2>
                  <p><strong>Easily connect with trusted caregivers or people who need care</strong></p>
                  <p>right from your phone or computer</p>
            </div>
          </article>
      </Host>
    );
  }
}
