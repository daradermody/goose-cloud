import { useEffect, useState } from 'react'
import gooseGameImg from '../assets/untitled_goose_game_small.png'
import mercedesImg from '../assets/mercedes_small.png'

export function TestimonialsSection() {
  return (
    <div className="testimonials" style={{ padding: '20px 0'}}>
      <div style={{ width: 'calc(100% - 60px)', maxWidth: '1140px', margin: 'auto', overflow: 'hidden' }}>
        <CompanyTestimonials/>
      </div>
    </div>
  )
}

function CompanyTestimonials() {
  const [shift, setShift] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const shiftWidth = document.getElementById('client-logo')?.clientWidth || 0
      setShift(prev => prev + shiftWidth)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="company-testimonials" style={{ display: 'flex', transform: `translate3d(-${shift}px, 0px, 0px)`, transitionDuration: '1000ms' }}>
      <img id="client-logo" src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src={mercedesImg}/>
      <img src={gooseGameImg}/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>

      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src={mercedesImg}/>
      <img src={gooseGameImg}/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>

      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src={mercedesImg}/>
      <img src={gooseGameImg}/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>

      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src={mercedesImg}/>
      <img src={gooseGameImg}/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>

      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src={mercedesImg}/>
      <img src={gooseGameImg}/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>

      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src={mercedesImg}/>
      <img src={gooseGameImg}/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vanity-fair.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/vice.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/wired.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/mashable-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/elite-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/bf-1.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/forbes.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/ibm.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/newyork-times.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/tc.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/time.jpg"/>
      <img src="https://www.spotiflex.com/wp-content/uploads/2022/04/usa-today.jpg"/>
    </div>
  )
}
