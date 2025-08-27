import { html } from 'lit';
import 'icare-components'; // Ensure this resolves to your built components

export default {
  title: 'Components/ICare Web Card',
  component: 'icare-web-card',
  args: {
    imageSrc: '/images/web-cards/web-card-image-1.jpg', // Ensure this file exists under public/images/
    imageAlt: 'Profile picture of Nurse Mary',
  },
};

const Template = ({ imageSrc, imageAlt, }) =>
  html`<div style="width:50%; min-width:320px; margin:0 auto;">
        <icare-web-card
        .imageSrc=${imageSrc}
        .imageAlt=${imageAlt}
        >
      </icare-web-card'></div>`;

export const Default = Template.bind({});