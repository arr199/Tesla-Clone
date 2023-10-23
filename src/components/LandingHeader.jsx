/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { useEffect, useRef, useState } from 'react'
import '../App.css'

// HANDLE THE HOVER EFFECT IN THE HEADER //
function useNavbarHoverEffect () {
  const hoverEffectDiv = useRef()
  // WE GET ALL THE SECTIONS //

  useEffect(() => {
    const myHeader = document.querySelector('#landing-header')

    function handleHover (e) {
		  // IF THE ELEMENT HAVE THIS CLASS ('header-links') THEN TRASNFORM OUR DIV TO BE  //
		  // THE EXACT SIZE OF THE ELEMENT AT THE EXACT POSITION //
		  if (e.target.classList.contains('header-links')) {
        const { top, right, bottom, left, width, height } = e.target.getBoundingClientRect()
        hoverEffectDiv.current.style.top = top + 'px'
        hoverEffectDiv.current.style.bottom = bottom + 'px'
        hoverEffectDiv.current.style.left = left + 'px'
        hoverEffectDiv.current.style.right = right + 'px'
        hoverEffectDiv.current.style.width = width + 'px'
        hoverEffectDiv.current.style.height = height + 'px'
        hoverEffectDiv.current.style.visibility = 'visible'
        hoverEffectDiv.current.style.opacity = '.2'
		  }
    }
    // HIDE OUR DIV WHEN WE ARE NOT HOVERING THE NAV LINKS
    function handleLeave (e) {
		  hoverEffectDiv.current.style.visibility = 'hidden'
		  hoverEffectDiv.current.style.opacity = '0'
    }

    myHeader.addEventListener('mouseleave', handleLeave)
    myHeader.addEventListener('mouseover', handleHover)

    return () => {
		  myHeader.removeEventListener('mouseover', handleHover)
		  myHeader.removeEventListener('mouseleave', handleLeave)
    }
	  }, [])
	  return { hoverEffectDiv }
}
function useGetAllSections () {
  const sections = useRef()
  useEffect(() => {
    sections.current = document.querySelectorAll('section')
  }, [])
  return { sections }
}

export const LandingHeader = () => {
  const [menuOn, setMenuOn] = useState(false)
  const { hoverEffectDiv } = useNavbarHoverEffect()
  const { sections } = useGetAllSections()

  // HANDLE THE MENU BUTTON FOR SMALLER SCREEN SIZE
  // WE BLUR OUR SECTION WHEN THE RIGHT NAVBAR MENU IS VISIBLE
  // WE HAVE A STATE TO HANDLE THE VISIBILITY [menuOn , setMenuOn]
  function showMenuBtn (e) {
    sections.current.forEach((e) => {
      e.setAttribute('style', 'filter: blur(5px) brightness(70%)')
    })

    setMenuOn((e) => true)
  }
  // HANDLE THE CLOSE BUTTON ('X') IN OUR RIGHT NAVBAR //
  function hideMenuBtn (e) {
    document.querySelector('#dropdown-rightbar').scrollTop = '0'
    setMenuOn((e) => false
    )
    sections.current.forEach(e => e.removeAttribute('style'))
  }
  // CLOSE THE RIGHT NAVBAR WHEN WE CLICK OUTSIDE OF IT ,REMOVE THE BLUR EFFECTS IN OUR SECTION //
  // ALSO SCROLL THE NAVBAR TO THE TOP //
  function closeMenu (e) {
    if (!document.querySelector('#dropdown-rightbar').contains(e.target) && e.target.id !== 'show-menu-btn') {
	  document.querySelector('#dropdown-rightbar').scrollTop = '0'
	  setMenuOn(e => false)
	  document.removeEventListener('click', closeMenu)
	  sections.current.forEach(e => e.removeAttribute('style'))
    }
  }
  document.addEventListener('click', closeMenu)

  return (
		<header id="landing-header" className=' text-white z-30 fixed transition-colors duration-300 '>
			<nav className='[&>ul>li]:max-[1200px]:hidden text-current top-0 flex w-screen justify-around items-center  [&>ul]:flex [&>ul>li]:px-4 [&>ul>li]:py-2  font-bold text-[14px] '>
				<svg style={{ filter: menuOn ? 'blur(3px)' : '' }} className=" min-w-[30px] min-h-auto w-40 h-14 tds-icon tds-icon-logo-wordmark [&>ul>li]:cursor-pointer [&>ul>li>a]:cursor-pointer  tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
				<ul className='ml-16' >
					<li className='header-links'><a href="#">Model S</a></li>
					<li className='header-links'><a href="#">Model 3</a></li>
					<li className='header-links'><a href="#">Model X</a></li>
					<li className='header-links'><a href="#">Model Y</a></li>
					<li className='models header-links '><a href="#">Solar Roof</a></li>
					<li className='header-links'><a href="#">Solar Panel</a></li>
					<li className='header-links'><a href="#">Power Wall</a></li>

				</ul>
				<ul id='right-navbar' className='  drop-shadow-md '>
					<li className='header-links'><a href="#">Shop</a></li>
					<li className='header-links'><a href="#">Account</a></li>
					<li className='header-links'><a href="#">Menu</a></li>
					<button id='show-menu-btn' onClick={showMenuBtn} className='bg-slate-300 bg-opacity-30
					w-max min-[1200px]:hidden py-3 px-6 rounded '>Menu
					</button>
				</ul>
			</nav>
			<nav id='dropdown-rightbar' className={`${menuOn ? 'flex' : 'hidden'} 
		 min-[1200px]:hidden max-[600px]:w-[60%] w-[35vw]  fixed inset-0 
         bg-white  h-screen justify-end ml-auto text text-black overflow-auto
         animate-fade-left animate-once animate-duration-300 animate-ease-in animate-normal animate-fill-backwards`}>
				<div className='absolute z-10 flex flex-col top-0  w-full
				pl-8 font-semibold  text-[13px] pb-24' >
					<ul id='ul-dropdown' className='w-[90%] hover:[&>li]:bg-slate-300 [&>li]:rounded  hover:[&>li]:bg-opacity-50
					[&>li]:py-2 [&>li]:pl-4   gap-[5px] flex flex-col [&>li]:transition-all  [&>li]:duration-200 [&>li]:ease-out'>
						<button onClick={hideMenuBtn} className=" hover:bg-slate-300 hover:bg-opacity-40 self-end py-2 px-4 mt-4 ml-[30px] text-[16px]
                  transition-colors duration-300 rounded">✖️
				  		</button>
						<li className=''><a href="#">Model S</a></li>
						<li className=''><a href="#">Model 3</a></li>
						<li className=''><a href="#">Model X</a></li>
						<li className=''><a href="#">Model Y</a></li>
						<li className=''><a href="#">Solar Roof</a></li>
						<li className=''><a href="#">Solar Panel</a></li>
						<li className=''><a href="#">Power Wall</a></li>
						<li className=''><a href="#">Existing Inventory</a></li>
						<li className=''><a href="#">Used Inventory</a></li>
						<li className=''><a href="#">Trade-In</a></li>
						<li className=''><a href="#">Demo Drive</a></li>
						<li className=''><a href="#">Insurance</a></li>
						<li className=''><a href="#">Fleet</a></li>
						<li className=''><a href="#">Commercial Energy</a></li>
						<li className=''><a href="#">Utilities</a></li>
						<li className=''><a href="#">Charging</a></li>
						<li className=''><a href="#">Careers</a></li>
						<li className=''><a href="#">Find Us</a></li>
						<li className=''><a href="#">Events</a></li>
						<li className=''><a href="#">Support</a></li>
						<li className=''><a href="#">Investor Relations</a></li>
						<li className=''><a href="#">Shop</a></li>
						<li className=''><a href="#">Account</a></li>
						<li className=''><a className='flex' href="#">More <span className='ml-auto text-base pr-3'>{'>'}</span></a></li>
					</ul>

				</div>
			</nav>
			<div ref={hoverEffectDiv} id='hoverEffect' className=' pointer-events-none  hoverEffect top-5 w-20 h-10  rounded z-40 absolute  bg-slate-600 opacity-0 delay-200  '></div>
		</header>
  )
}
