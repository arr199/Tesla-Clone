/* eslint-disable react/react-in-jsx-scope */
import img from '../assets/images/Homepage-Accessories-Desktop-NA-APAC.avif'

export const Accesories = () => {
  return (
    <section className='footer-section relative h-screen w-screen snap-center flex flex-col items-center justify-between overflow-hidden   '>
      <h1 className='mt-24 text-[40px]'>Accessories</h1>
      <div className='hero-buttons mb-20 flex grow  flex-col justify-end gap-6 [&>a]:border-0 [&>a]:text-[15px]'>
        <a className='text-black bg-white cursor-pointer font-bold  border-[3px] px-16 py-[8px] rounded' >Shop Now</a>
      </div>
      <img className='-z-10 h-screen w-screen absolute object-cover' src={img} ></img>
      <footer className="max-[800px]:hidden  bg-black w-full justify-center flex items-center">
        <ul className="footer-ul flex text-white items-center text-[13px] [&>li]:p-4  ">
          <li><a href="#">Tesla © 2023</a></li>
          <li><a href="#">Privacy & Legal</a></li>
          <li><a href="#">Vehicle Recalls</a></li>
          <li className="max"><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Get Updates</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#"> Locations</a></li>
        </ul>
      </footer>
    </section>
  )
}
