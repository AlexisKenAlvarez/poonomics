import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Launchpad = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 1 })
    const [cardRef, cardView] = useInView({ triggerOnce: true, threshold: 0.5 })


    return (
        <section className='w-full h-auto py-20 text-white bg-hero z-10 relative font-poppins overflow-hidden' id="launchpad">

            <img src="/left.webp" alt="Left" className="absolute left-0 sm:w-auto w-[10rem] sm:top-0 top-20 opacity-60 sm:opacity-100" />
            <img src="/right.webp" alt="Left" className="absolute right-0 sm:top-10 sm:w-auto w-[10rem] top-28 opacity-60 sm:opacity-100" />


            <div className="mx-auto w-fit text-center mt-10">
                <h2 className='text-mypink text-medium font-medium'>Get ready to launch</h2>
                <div className="h-fit w-fit relative mt-2" ref={titleRef}>
                    <h1 className='font-header text-7xl font-bold mt-2 z-0 stroke-white opacity-30'>LAUNCHPAD</h1>

                    <motion.h1 animate={titleView ? { y: 25 } : {}} transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }} className='absolute font-header text-7xl font-bold mt-2 z-10 bottom-0 left-0'>LAUNCHPAD</motion.h1>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={cardView ? { scale: [0.5, 1], opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1], type: "spring", stiffness: 250 }} ref={cardRef} className="bg-picbg border-2 border-mypink h-auto w-[20rem] p-3 mx-auto mt-28 rounded-xl z-10 relative">
                    <div className="h-[18rem] relative">
                        <img src="/token.webp" alt="" className="absolute w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-auto">
                        <div className=" flex items-center justify-between mt-4">
                            <h1 className='font-header text-2xl font-bold'>PooNomic</h1>
                            <div className="w-20 h-8 bg-status rounded-2xl flex items-center justify-around">
                                <div className="w-3 h-3 bg-mypink rounded-full ml-2"></div>
                                <p className='text-sm mr-2'>Live</p>
                            </div>
                        </div>

                        <div className=" flex items-center justify-between mt-4">
                            <h1 className='font-header text-xl font-bold'>Liquidity: </h1>
                            <p className="text-mygrey mr-2 font-medium">0%</p>
                        </div>

                        <div className=" flex items-center justify-between mt-2">
                            <h1 className='font-header text-xl font-bold'>Lockup time: </h1>
                            <p className="text-mygrey mr-2 font-medium">180 days</p>
                        </div>


                        <a href="" target='_blank' rel="noopener noreferrer" className="">
                            <button className="w-full py-3 bg-gradient-to-br from-sauce to-mypink mt-6 rounded-xl">
                                <p className='text-center font-header font-bold text-xl'>View token</p>
                            </button>
                        </a>


                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Launchpad