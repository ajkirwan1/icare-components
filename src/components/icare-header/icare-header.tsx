import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'icare-header',
  styleUrl: 'icare-header.scss',
  shadow: true,
})
export class IcareHeader {
  @Prop() loggedIn = false;


  render() {
    return (
      <Host>
         <header>
          <div>
            <icare-logo />
          </div>
            {this.loggedIn ? <> <icare-button>Logout</icare-button>
             </> :  <div class="button-wrapper"><icare-button>Login</icare-button>
              <icare-button>Register</icare-button></div>}
         </header>
      </Host>
    );
  }
}
