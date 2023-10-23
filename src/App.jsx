/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import './App.css'
import { LandingHeader } from './components/LandingHeader'
import { LandingSection } from './components/LandingSection'
import { Model3 } from './components/Model3'
import { ModelY } from './components/ModelY'
import { ModelS } from './components/ModelS'
import { ModelX } from './components/ModelX'
import { SolarPanels } from './components/SolarPanels'
import { SolarRoof } from './components/SolarRoof'
import { PowerWall } from './components/PowerWall'
import { Accesories } from './components/Accesories'
import { FooterSmallScreen } from './components/FooterSmallScreen'

// CHANGING THE HEADER COLOR WHEN WE DETECT ANOTHER SECTION BESIDES THE LANDING SECTION //
function useChangeHeaderColor () {
  const myHeader = document.querySelector('#landing-header')
  const section = document.querySelectorAll('section')
  // WHENEVER THE SECTION IS OVER 50% WE WILL DETECT IT AND MAKE THE CHANGE , SEE -> threshold: 0.5 //
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  // WE SET OUR OBSERVER WE OUR PREVIOUS OBSERVER OPTIONS //
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        // SET THE COLOR DEPENFING OF THE SECTION CLASS //
        e.target.classList.contains('landing-section') ? myHeader.style.color = 'white' : myHeader.style.color = 'black'
      }
    })
  }, observerOptions)
  // SET THE OBSERVER TO OBSERVE ALL MY SECTIONS //
  section.forEach(e => observer.observe(e))
}

function App () {
  useEffect(useChangeHeaderColor, [])

  return (
    <>
       <LandingHeader></LandingHeader>
       <main className='h-screen w-full snap-y snap-mandatory overflow-auto overflow-x-hidden'>
          <LandingSection></LandingSection>
          <Model3></Model3>
          <ModelY></ModelY>
          <ModelS></ModelS>
          <ModelX></ModelX>
          <SolarPanels></SolarPanels>
          <SolarRoof></SolarRoof>
          <PowerWall></PowerWall>
          <Accesories></Accesories>
          <FooterSmallScreen></FooterSmallScreen>
       </main>
    </>
  )
}

export default App
