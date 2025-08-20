import './index.css'
import { HeroSection } from './sections/HeroSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import thumbsUp from './assets/thumbs_up.png'
import step1Img from './assets/step_1.webp'
import step2Img from './assets/step_2.webp'
import step3Img from './assets/step_3.png'
import conorImg from './assets/conor.png'

export function App() {
  return (
    <div>
      <HeroSection/>
      <TestimonialsSection/>
      <WhySection/>
      <HowItWorksSection/>
      <SupportSection/>
      <EnhancedSection/>
      <Footer/>
    </div>
  )
}

function WhySection() {
  return (
    <div style={{ color: 'black', textAlign: 'center', backgroundColor: '#FAF8FE', margin: '20px auto', padding: '50px 0' }}>
      <h1 style={{ fontSize: '44px', maxWidth: '1000px', margin: '0 auto' }}>GooseCloud™ Patented Cloud-based® Goose Technology© Solves Modern Challanges</h1>
      <p style={{ fontSize: '1.2rem' }}>Our professional multi-channel promotion addresses these through legitimate marketing methods.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '1.3rem', maxWidth: '1200px', margin: '40px auto' }}>
        <div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-img02.png"/>
          <p>Creating great content doesn’t guarantee discovery</p>
        </div>
        <div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-img03.png"/>
          <p>Platform algorithms limit organic reach to new audiences</p>
        </div>
        <div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-img04.png"/>
          <p>Manual promotion takes hours of daily effort</p>
        </div>
        <div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-img05.png"/>
          <p>Many visibility strategies require specialized expertise</p>
        </div>
        <div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-img06.png"/>
          <p>List Item Building relevant connections requires consistent outreach</p>
        </div>
      </div>

      <a
        className="call-to-action"
        href="https://www.youtube.com/live/VRTH4VpuO6o?si=OvGsFVZck9Cx5A_p&t=18796"
        target="_blank"
        rel="noopener noreferrer"
      >
        START MY FREE PROMOTION TRIAL →
      </a>
    </div>
  )
}

function HowItWorksSection() {
  return (
    <div id="how-it-works" style={{ color: 'black', textAlign: 'center', margin: '40px auto', padding: '20px 0' }}>
      <h1 style={{ fontSize: '44px', maxWidth: '1000px', margin: '0 auto' }}>3 Simple Steps To Enhanced Goose Visibility</h1>
      <p style={{ fontSize: '1.2rem' }}>We handle the Cloud work, so you can focus on the Goose.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', maxWidth: '1200px', margin: '80px auto 40px' }}>

        <div style={{ backgroundColor: '#F4F4F4', maxWidth: '380px', borderRadius: '20px' }}>
          <div style={{ backgroundImage: 'linear-gradient(160deg, #18A34A 50%, #054B25 100%)', height: '230px', borderRadius: '20px 20px 0 0' }}>
            <img src={step1Img} style={{ width: '290px', transform: 'translateY(-30px)' }}/>
          </div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-n01.png" style={{marginTop: '-35px'}} />
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: '#0A612E', marginTop: '8px' }}>Define Your Target Audience</h4>
            <p>
              Tell us about your ideal audience demographics. Our team identifies viewer segments that align with your geese - people who may find value in the honks you share.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#F4F4F4', maxWidth: '380px', borderRadius: '20px' }}>
          <div style={{ backgroundImage: 'linear-gradient(160deg, #18A34A 50%, #054B25 100%)', height: '230px', borderRadius: '20px 20px 0 0' }}>
            <img src={step2Img} style={{ width: '290px', transform: 'translateY(-60px)' }}/>
          </div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-n02.png" style={{marginTop: '-35px'}} />
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: '#0A612E', marginTop: '8px' }}>Strategic Multi-Channel Promotion</h4>
            <p>
              We activate our network of influencers, affiliate partners, honking specialists, and paid media campaigns to introduce your geese to relevant audiences across multiple platforms.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#F4F4F4', maxWidth: '380px', borderRadius: '20px' }}>
          <div style={{ backgroundImage: 'linear-gradient(160deg, #18A34A 50%, #054B25 100%)', height: '230px', borderRadius: '20px 20px 0 0' }}>
            <img src={step3Img} style={{ width: '340px', transform: 'translateY(-20px)' }}/>
          </div>
          <img src="https://www.spotiflex.com/wp-content/uploads/2025/07/sp-n03.png" style={{marginTop: '-35px'}} />
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: '#0A612E', marginTop: '8px' }}>Monitor Your Profile Visibility</h4>
            <p>
              Just share your username (no gooseword needed), and we handle the external promotion. No complicated setup. Your honks gain visibility while you focus on breeding great geese.
            </p>
          </div>
        </div>

      </div>

      <a
        className="call-to-action"
        href="https://www.youtube.com/live/VRTH4VpuO6o?si=OvGsFVZck9Cx5A_p&t=18796"
        target="_blank"
        rel="noopener noreferrer"
      >
        START MY FREE PROMOTION TRIAL →
      </a>
    </div>
  )
}

function SupportSection() {
  return (
    <div style={{ backgroundColor: 'rgb(250, 248, 254)', paddingTop: '20px'}}>
      <div
        style={{
          maxWidth: '1200px',
          width: 'calc(100% - 60px)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          color: '#000'
        }}
      >
        <img src={conorImg} style={{ width: '500px' }}/>

        <div style={{ marginTop: '40px' }}>
          <h1 style={{ fontSize: '45px', fontWeight: '700', margin: '20px 0', }}>
            24-hour support
          </h1>

          <p style={{ fontSize: '19px', margin: '0', lineHeight: '1.3em', maxWidth: '500px' }}>
            When it's almost six o'clock, and your feeling absolutely goosed, you can count on our team to be there for
            you. Our support team is available 24/7 to to get your geese honking again.
          </p>

          <div style={{ margin: '20px 10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Megaphone/>
              <span>Professional guidance from promotion specialists</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Megaphone/>
              <span>Round-the-clock technical assistance available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Megaphone/>
              <span>Customized strategy based on your niche</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Megaphone/>
              <span>Simple, secure, safe. Time to put the kettle on.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function EnhancedSection() {
  return (
    <div style={{ backgroundImage: 'url(https://www.spotiflex.com/wp-content/uploads/2025/07/sp-img16.jpg)' }}>
      <div
        style={{
          maxWidth: '1200px',
          width: 'calc(100% - 60px)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ marginTop: '100px' }}>
          <h1
            style={{
              fontSize: '45px',
              fontWeight: '700',
              marginTop: '20px',
              marginBottom: '20px',
              color: '#fff',
              lineHeight: '1.2'
            }}
          >
            <div style={{ textIndent: '-5%', whiteSpace: 'nowrap' }}>Enhance Your Life</div>
            <div style={{ textIndent: '15%', whiteSpace: 'nowrap' }}>With GooseCloud™</div>
          </h1>

          <p style={{ fontSize: '19px', margin: '0', lineHeight: '1.3em', maxWidth: '500px' }}>
            Connect with more relevant audiences through legitimate multi-channel goose promotion without
            risking your account security or wasting time on manual outreach.
          </p>

          <div style={{ margin: '20px 10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkmark/>
              <span>Platform Compliant Promotion</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkmark/>
              <span>Premium Marketing Channels</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkmark/>
              <span>Comprehensive All-In-One Technology</span>
            </div>
          </div>
        </div>

        <img src={thumbsUp} style={{ marginTop: '-40px', height: '680px' }}/>
      </div>
    </div>
  )
}

function Checkmark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#FFF" width="24" height="24">
      <path
        d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"
      />
    </svg>
  )
}

function Megaphone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="24"
      height="24"
      style={{ transform: 'rotate(-30deg)' }}
    >
      <path d="M525.2 82.9C536.7 88 544 99.4 544 112L544 528C544 540.6 536.7 552 525.2 557.1C513.7 562.2 500.4 560.3 490.9 552L444.3 511.3C400.7 473.2 345.6 451 287.9 448.3L287.9 544C287.9 561.7 273.6 576 255.9 576L223.9 576C206.2 576 191.9 561.7 191.9 544L191.9 448C121.3 448 64 390.7 64 320C64 249.3 121.3 192 192 192L276.5 192C338.3 191.8 397.9 169.3 444.4 128.7L491 88C500.4 79.7 513.9 77.8 525.3 82.9zM288 384L288 384.2C358.3 386.9 425.8 412.7 480 457.6L480 182.3C425.8 227.2 358.3 253 288 255.7L288 384z"/>
    </svg>
  )
}

function Footer() {
  return (
    <div style={{ backgroundColor: '#F4F4F4', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <p style={{ fontSize: '14px', color: '#666' }}>
        © 2025 GooseCloud™. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-conditions">Terms and Conditions</a>
      </p>
      <p style={{ fontSize: '12px', color: '#666', maxWidth: '1200px' }}>
        GooseCloud™ is a registered trademark of Grey Goose LLC, a subdivision of Conor Williams Equity and Assurance Brokers Ltd. Conor Williams may not be held liable for damages or losses of geese incurred through the use of GooseCloud™ services. Geese hatched within the GooseCloud™ ecosystem are not guaranteed to be organic or free-range. Please consult your local GooseCloud™ representative for more information on our patented Cloud-based® Goose Technology© platform service.
      </p>
    </div>
  )
}
