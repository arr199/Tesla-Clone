/* eslint-disable react/react-in-jsx-scope */
export const FooterSmallScreen = () => {
  return (
        <section className="max-[800px]:flex hidden footer-section-sm bg-red-400 snap-center justify-center">
            <ul className="bg-black flex text-white items-center w-full text-[13px] [&>li]:p-2 flex-col p-6">
                <li><a href="#">Tesla © 2023</a></li>
                <li><a href="#">Privacy & Legal</a></li>
                <li><a href="#">Vehicle Recalls</a></li>
                <li><a href="#">News</a></li>
            </ul>
        </section>
  )
}
