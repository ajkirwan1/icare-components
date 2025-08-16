import { html } from 'lit';
import 'icare-components'; // Make sure this imports the compiled custom elements: icare-page, icare-header, icare-caregiver-profile-card

export default {
  title: 'Layouts/ICare Page',
  component: 'icare-page',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => html`
  <icare-page>
    <div style="padding: 2rem;">
      <h2>Selected Caregivers</h2>
      <p>
        Meet our dedicated caregivers who provide compassionate support to individuals and families.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 2rem;">
        <icare-caregiver-profile-card
          .cardTitle=${'Mary Smith'}
          .imageSrc=${'/images/profile-image-1.jpg'}
          .imageAlt=${'Profile picture of Mary Smith'}
          .description=${'Over 10 years of home care experience.'}
          .shortBio=${'Specializes in elderly care and chronic illness support.'}
                    .features=${[
            '10+ years of experience in home healthcare',
            'Certified in elder care and chronic illness support',
            'Fluent in English and Spanish',
            'Trained in emergency response and medication management',
            'Available weekdays and weekends',
          ]}
        >
          <div slot="footer">
            <button>Contact</button>
          </div>
        </icare-caregiver-profile-card>

        <icare-caregiver-profile-card
          .cardTitle=${'John Doe'}
          .imageSrc=${'/images/profile-image-2.jpg'}
          .imageAlt=${'Profile picture of John Doe'}
          .description=${'Trained in physical therapy and mobility assistance.'}
          .shortBio=${'Empowers patients with mobility-focused routines and independence strategies.'}
                    .features=${[
            'Expert in mobility and rehabilitation support',
            'Certified physical therapy assistant',
            'Strong background in post-surgery care',
            'Passionate about improving quality of life',
            'Available for live-in care on weekends',
          ]}
        >
          <div slot="footer">
            <button>Contact</button>
          </div>
        </icare-caregiver-profile-card>

        <icare-caregiver-profile-card
          .cardTitle=${'Alice Johnson'}
          .imageSrc=${'/images/profile-image-3.jpg'}
          .imageAlt=${'Profile picture of Alice Johnson'}
          .description=${'Pediatric care specialist.'}
          .shortBio=${'Experienced with children with special needs and long-term developmental care.'}
                    .features=${[
            'Specialized in pediatric home healthcare',
            '5+ years supporting children with autism and ADHD',
            'Certified in child CPR and first aid',
            'Fluent in English and ASL',
            'Available for overnight care',
          ]}
        >
          <div slot="footer">
            <button>Contact</button>
          </div>
        </icare-caregiver-profile-card>
      </div>
    </div>
  </icare-page>
`;

export const Default = Template.bind({});
