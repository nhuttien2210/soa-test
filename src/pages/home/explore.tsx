import { memo, useContext } from "react"

import img from '@/assets/images/explore.webp'
import imgXl from '@/assets/images/explore-xl.webp'
import imgLg from '@/assets/images/explore-lg.webp'
import imgSm from '@/assets/images/explore-lg.png'
import { AppContext } from "@/provider"

const Explore = () => {
    const {data} = useContext<any>(AppContext)
    return (
        <div className="relative">
            <img src={img} className="xl:hidden" alt="" />
            <img src={imgXl} className="hidden xl:block lg:hidden" alt="" />
            <img src={imgLg} className="hidden lg:block sm:hidden" alt="" />
            <img src={imgLg} className="hidden  sm:block" alt="" />

            <div className="absolute top-[70px] left-0 right-0 m-auto text-center lg:top-[96px] sm:top-0 sm:px-4">
                <div className="text-[#562C2C] leading-[60px] text-[52px] capitalize font-semibold xl:text-[40px] lg:leading-[40px] lg:text-[32px] sm:text-[24px]">
                    {data.bloc_6.title} <br /> <span className="text-red-050 capitalize">{data.bloc_6.subtitle}</span>
                </div>
                <div className="mt-6 flex justify-center text-[#562C2C] text-[24px] xl:mt-6 xl:text-[20px] lg:text-[16px] lg:mt-4 sm:mt-0 sm:text-[14px]">
                    <p className="w-[35%] xl:w-full">
                    {data.bloc_6.text}
                    </p>
                </div>
                <div>
                    <button className="mt-10 py-3 px-10 bg-[#F2542D] rounded-full text-[18px] text-white hover:bg-[#CA3E1B] transition-all xl:text-[16px] lg:mt-8 sm:mt-4 sm:text-[16px]"> 
                    {data.bloc_6.button}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(Explore)