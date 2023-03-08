import React from 'react'
import { motion } from 'framer-motion'

const NFTImage = () => {


    return (
        <motion.div className="bg-picbg border-2 border-mypink h-auto w-[16rem] p-3 mx-auto rounded-xl z-10 relative">
            <div className="h-[14rem] relative">
                <img src="/dummy.webp" alt="" className="absolute w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-full h-auto">
                <div className=" flex items-center justify-between mt-2">
                    <h1 className='font-header text-2xl font-bold ml-2'>PooNomic</h1>
                    <p className='text-md mr-2'>0 ETH</p>

                </div>

            </div>
        </motion.div>
    )
}

export default NFTImage