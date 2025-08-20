import logo from '../assets/logo.png'

export function HeroSection() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: 'linear-gradient(135deg, #1DB954 20%, #054924 50%)',
      }}
    >
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, #63429200 65%, #1db954 100%)',
          paddingBottom: '10px',
        }}
      >
        <Header/>
        <div className="hero-content">
          <HeroLeft/>
          <HeroRight/>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div
      className="header"
      style={{
        maxWidth: '1140px',
        width: 'calc(100% - 60px)',
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img src={logo} style={{ marginLeft: '20px', height: '60px' }} alt="logo"/>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>GooseCloud</h1>
      </div>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '40px',
        }}
      >
        <li><a href="/">Home</a></li>
        <li><a href="/#how-it-works">How It Works</a></li>
        <li><a href="mailto:conzo@goosecloud.com?subject=Time%20to%20get%20GOOSED">Contact</a></li>
        <li>
          <a
            className="call-to-action"
            href="https://www.youtube.com/live/VRTH4VpuO6o?si=OvGsFVZck9Cx5A_p&t=18796"
            target="_blank"
            rel="noopener noreferrer"
          >
            3 Day Free Trial
          </a>
        </li>
      </ul>
    </div>
  )
}

function HeroLeft() {
  return (
    <div style={{ width: '100%' }}>
      <h1
        style={{
          fontSize: '20px',
          fontWeight: '400'
        }}
      >
        The #1 Organic GooseCloud™ Growth Service
      </h1>
      <h2
        style={{
          fontSize: '45px',
          fontWeight: '700',
          marginTop: '20px',
          marginBottom: '20px',
          color: '#fff',
          lineHeight: '1'
        }}
      >
        Get 5,000 CloudGeese™ Every Month
      </h2>

      <p style={{ fontSize: '19px', margin: '0', lineHeight: '1.3em' }}>
        Our set it and forget it methodology for organic Goose growth ensures you consistently get the results you're
        looking for, without the honking.
      </p>

      <div className="hero-cards" style={{ display: 'flex', gap: '10px' }}>
        <HeroCard label="TOS Compliant" icon="https://www.spotiflex.com/wp-content/uploads/2022/04/TOS-Compliant.png"/>
        <HeroCard label="AI Powered Optimization" icon="https://www.spotiflex.com/wp-content/uploads/2022/02/AI_Powered__Optimization.png"/>
        <HeroCard label="Targeted Niche Specific Goosers" icon="https://www.spotiflex.com/wp-content/uploads/2022/02/Targeted_Niche_Specific_Followers.png"/>
        <HeroCard label="Set It - Forget It Technology" icon="https://www.spotiflex.com/wp-content/uploads/2022/02/Set_It_-_Forget_It__Technology.png"/>
      </div>

      <div
        className="call-to-action"
        style={{ fontSize: '17px', display: 'inline-block', marginTop: '40px' }}
      >
        <a
          style={{ color: 'black', margin: '20px', textDecoration: 'none' }}
          href="https://www.youtube.com/live/VRTH4VpuO6o?si=OvGsFVZck9Cx5A_p&t=18796"
          target="_blank"
          rel="noopener noreferrer"
        >
          BEGIN GOOSING NOW – FREE TRIAL!
        </a>
      </div>

      <div style={{ margin: '15px 10px 10px 10px', backgroundColor: 'white', height: '5px', maxWidth: '360px'}}>
        <div style={{ height: '100%', width: '91%', backgroundColor: 'red' }}></div>
      </div>
      <div style={{ maxWidth: '380px', textAlign: 'center', fontWeight: '700' }}>Hurry! Only Accepting 6 More Spots This Week!</div>
    </div>
  )
}

function HeroCard({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="hero-card">
      <img src={icon} alt="icon" style={{ width: '24px', height: '24px' }}/>
      <span style={{ fontSize: '16px', fontWeight: '500' }}>{label}</span>
    </div>
  )
}

function HeroRight() {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <img className="top-confetti" src="https://www.spotiflex.com/wp-content/uploads/2022/02/top-confettis.png"/>
      </div>

      <iframe
        src="https://www.youtube.com/embed/tQbaYguYb04"
        // src="https://player.vimeo.com/video/904480410?muted=1&amp;autoplay=1&amp;autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963&amp;texttrack=false"
        title="GooseCloud Testimonials"
        frameBorder="0"
        allow="web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="testimonials-video"
      />
      <div>
        <img className="bottom-confetti" src="https://www.spotiflex.com/wp-content/uploads/2022/02/bottom-confettis.png"/>
      </div>
    </div>
  )
}
