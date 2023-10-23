/* eslint-disable react/react-in-jsx-scope */
import video from '../../src/video.webm'

export const LandingSection = () => {
  return (
      <section className='landing-section relative h-screen w-screen snap-center flex flex-col items-center justify-between overflow-hidden text-white'>
              <h1 className='mt-24 text-[40px] max-[600px]:text-[28px]'>Experience Tesla</h1>
              <p className='mb-auto text-[14px]' >Schedule a Demo Drive Today</p>
              <a className='cursor-pointer font-bold mb-20 border-[3px] px-20 py-[3px] rounded hover:bg-slate-100 hover:text-black transition-colors duration-500'>Demo Drive</a>
              <video className='-z-10 h-screen w-screen absolute object-cover' autoPlay loop muted src={video} ></video>
      </section>
  )
}
