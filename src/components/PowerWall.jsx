/* eslint-disable react/react-in-jsx-scope */
import img from '../assets/images/Homepage-Powerwall-Desktop.avif'

export const PowerWall = () => {
  return (
        <section className='relative h-screen w-screen snap-center flex flex-col items-center justify-between overflow-hidden   '>
            <h1 className='mt-24 text-[40px]'>Powerwall</h1>
            <div className='hero-buttons mb-20 flex gap-6 [&>a]:border-0 [&>a]:text-[15px]'>
                <a className='text-black bg-white cursor-pointer font-bold  border-[3px] px-16 py-[8px] rounded' >Order Now</a>
                <a className='bg-[#171a20a6] text-white cursor-pointer font-bold  border-[3px] px-16 py-[8px] rounded'>Learn More</a>
            </div>
            <img className='-z-10 h-screen w-screen absolute object-cover' src={img} ></img>
        </section>
  )
}
