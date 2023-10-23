/* eslint-disable react/react-in-jsx-scope */
import img from '../assets/images/Homepage-Model-3-Desktop-NA.avif'

export const Model3 = () => {
  return (
        <section id="model3" className='model3 relative h-screen w-screen snap-center flex flex-col items-center justify-between overflow-hidden   '>
            <h1 className='mt-24 text-[40px]'>Model 3</h1>
            <p className='text-center mb-auto text-[14px]' >Starting ar $32-740 <br></br> After Federal Tax Credit</p>
            <div className='hero-buttons   mb-20  gap-6 [&>a]:border-0 [&>a]:text-[15px] text-center'>
                <a className='text-black bg-white cursor-pointer font-bold  border-[3px] px-16 py-[8px] rounded ' >Explore Inventory</a>
                <a className='bg-[#171a20a6] text-white cursor-pointer font-bold  border-[3px] px-16 py-[8px] rounded  '>Custom Order</a>
            </div>
             <img className='bg-image absolute object-cover -z-10 brightness-120 h-full w-full' src={img} ></img>
        </section>
  )
}
