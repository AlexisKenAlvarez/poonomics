import React, { useRef, useEffect } from 'react'
import { FaTelegramPlane, FaLongArrowAltRight } from 'react-icons/fa'
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion'


const Hero = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })

    const opacitySpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const opacity1 = useTransform(opacitySpring, [0.1, 0.5], [1, 0])

    const opacity2 = useTransform(opacitySpring, [0.1, 0.7], [0, 1])


    return (
        <div className="w-full h-screen relative" ref={ref}>
            <div className='w-full h-full fixed top-0 left-0 bg-hero'>

                <section className='w-full h-screen flex items-center text-white font-poppins py-20 relative z-10'>


                    <motion.div className="mx-auto" style={{ opacity: opacity1 }}>

                        <img src="/topog.webp" alt="Topog" className="absolute h-full right-0 top-0" />

                        <div className="w-2 h-2 absolute bg-[#594798] rounded-full shadow-heroglow1 top-[18rem] left-[15%] z-[1]"></div>
                        <div className="w-10 h-10 absolute bg-[#6e3465] rounded-full shadow-heroglow2 bottom-[15rem] right-[20%] z-0"></div>

                        <div className="w-fit px-8 mx-auto flex items-center gap-x-14 relative z-10 2xl:gap-x-[8rem] 2xl:max-w-[1500px]">
                            <div className="w-full md:min-w-[30rem] md:text-left text-center">
                                <motion.h2 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }} className='text-mypink md:mx-0 mx-auto font-medium '>Be a poonomics</motion.h2>
                                <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.1 }} className='font-header md:text-5xl 2xl:text-7xl 2xl:max-w-[67rem] font-bold max-w-[40rem] mt-2 md:leading-[3.4rem] md:mx-0 mx-auto text-4xl'>Discover Our Rewards dApp And <span className="w-fit h-fit text-transparent bg-gradient-to-br from-sauce to-mypink bg-clip-text">NFT Collections</span></motion.h1>
                                <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.15 }} className='text-mygrey max-w-[33rem] mt-3 md:mx-0 mx-auto'>PooNomics is the Launchpad for PooChain and the first solution that aims to offer a complete set of cryptocurrencies tools that run on PooChain.</motion.p>

                                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.2 }} className="mt-10 flex gap-x-8 items-center md:mx-0 mx-auto w-fit md:flex-row flex-col gap-y-7">
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

                                </motion.div>
                            </div>

                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, type: 'spring', stiffness: 50 }} className="w-full items-center justify-center h-full lg:flex hidden z-10 relative" style={{ transformOrigin: "right center" }}>

                                <img src="/hero.webp" alt="Hero" className="w-[48vh] relative z-10 block mb-6" />
                                <div className="w-[85%] h-[90%] bg-picbg absolute bottom-0 border-2 border-mypink z-[2]"></div>
                                <div className="w-[85%] h-[70%] bg-picbg absolute bottom-16 border-2 border-mypink right-0 z-[1]"></div>
                                <div className="w-[85%] h-[60%] bg-picbg absolute bottom-24 border-2 border-mypink -right-9"></div>

                            </motion.div>

                        </div>
                    </motion.div>


                    <motion.img src="/stars.webp" alt="Stars" className="w-full h-full sm:object-fit mt-[10%] object-cover z-0 absolute" style={{ opacity: opacity2 }} />

                </section>


            </div>
        </div>


    )
}

export default Hero