import React from 'react'
import { FaTelegramPlane, FaLongArrowAltRight } from 'react-icons/fa'


const Hero = () => {
    return (
        <section className='w-full h-screen flex items-center text-white font-poppins bg-hero py-20 relative'>
            <div className="w-2 h-2 absolute bg-[#CDA1FF] rounded-full"></div>
            <div className="w-fit px-8 mx-auto flex items-center gap-x-14">
                <div className="w-full min-w-[30rem]">
                    <h2 className='text-mypink'>Be a poonomics</h2>
                    <h1 className='font-header text-5xl font-bold max-w-[40rem] mt-2 leading-[3.4rem]'>Discover Our Rewards dApp And NFT Collections</h1>
                    <p className='text-mygrey max-w-[33rem] mt-3'>PooNomics is the Launchpad for PooChain and the first solution that aims to offer a complete set of cryptocurrencies tools that run on PooChain.</p>

                    <div className="mt-10 flex gap-x-8 items-center">
                        <a href="" target="_blank" rel="noopener noreferrer" className="">
                            <button className="flex items-center gap-x-2 bg-gradient-to-br px-7 py-4 from-sauce to-mypink rounded-lg transition-all ease-in-out duration-300 hover:shadow-hover hover:translate-y-[-6px]">
                                <p className="text-lg">Check out the dApp</p>
                                <FaLongArrowAltRight />
                            </button>
                        </a>

                        <a href="" target="_blank" rel="noopener noreferrer" className="">
                            <button className="flex gap-x-2 items-center text-lg">
                                <p className="">Community</p>
                                <FaTelegramPlane className='text-xl' />
                            </button>
                        </a>

                    </div>
                </div>

                <div className="w-full flex items-center justify-center h-full">
                    <img src="/hero.webp" alt="Hero" className="w-[48vh]" />
                </div>

            </div>
        </section>
    )
}

export default Hero