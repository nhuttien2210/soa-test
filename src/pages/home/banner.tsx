import { memo, useContext } from "react"

import Container from "@/components/container"
import Svg from "@/components/svg"

import moutain from '@/assets/svgs/mountains-2.svg?raw'
import fish from '@/assets/svgs/fish-2.svg?raw'
import location from '@/assets/svgs/location-2.svg?raw'
import blur from '@/assets/svgs/blur.svg?raw'
import banner from '@/assets/images/banner.webp'
import bannerMb from '@/assets/images/banner-mb.webp'
import { AppContext } from "@/provider"


const Banner = () =>{
    const {data} = useContext<any>(AppContext)
    
    return (
        <div className="relative overflow-hidden">
            <div className="w-full">
                <img className="sm:hidden" src={banner} alt="" />
                <img className="hidden sm:!block" src={bannerMb} alt="" />
            </div>
            <Container className="text-white absolute bottom-[70px] left-0 right-0 flex justify-between border-t border-white-030 px-20 xl:px-8 xl:!bottom-10">
                <div className="group relative w-full flex flex-col items-center gap-[14px] py-5 cursor-pointer">
                    <div className="group-hover:opacity-100 transition-all duration-500 shadow-white shadow-2xl h-1 bg-white w-full absolute top-0 opacity-0"></div>
                    <Svg url={blur} className="absolute top-0 w-[145%] group-hover:opacity-100 opacity-0 transition-all duration-500" />
                    <Svg url={moutain} className="max-w-10 m-auto xl:max-w-8 lg:!max-w-6" />
                    <div className="group-hover:translate-y-0 transition-all duration-500 text-[20px] font-semibold uppercase translate-y-[150px] leading-4 xl:translate-y-0 xl:text-[18px] xl:font-semibold sm:font-medium sm:text-[14px] text-center ">{data.banner_menu[0]}</div>
                </div>
                <div className="group relative w-full flex flex-col items-center gap-[14px] py-5 cursor-pointer">
                    <div className="group-hover:opacity-100 transition-all duration-500 shadow-white shadow-2xl h-1 bg-white w-full absolute top-0 opacity-0"></div>
                    <Svg url={blur} className="absolute top-0 w-[145%] group-hover:opacity-100 opacity-0 transition-all duration-500" />
                    <Svg url={fish} className="max-w-10 m-auto xl:max-w-8 lg:!max-w-6" />
                    <div className="group-hover:translate-y-0 transition-all duration-500 text-[20px] font-semibold uppercase translate-y-[150px] leading-4 xl:translate-y-0 xl:text-[18px] xl:font-semibold sm:font-medium sm:text-[14px] text-center ">{data.banner_menu[1]}</div>
                </div>
                <div className="group relative w-full flex flex-col items-center gap-[14px] py-5 cursor-pointer">
                    <div className="group-hover:opacity-100 transition-all duration-500 shadow-white shadow-2xl h-1 bg-white w-full absolute top-0 opacity-0"></div>
                    <Svg url={blur} className="absolute top-0 w-[145%] group-hover:opacity-100 opacity-0 transition-all duration-500" />
                    <Svg url={location} className="max-w-10 m-auto xl:max-w-8 lg:!max-w-6" />
                    <div className="group-hover:translate-y-0 transition-all duration-500 text-[20px] font-semibold uppercase translate-y-[150px] leading-4 xl:translate-y-0 xl:text-[18px] xl:font-semibold sm:font-medium sm:text-[14px] text-center ">{data.banner_menu[2]}</div>
                </div>
            </Container>
        </div>
    )
}

export default memo(Banner)