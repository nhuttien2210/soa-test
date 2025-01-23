import { memo, useContext } from "react"
import Container from "./container"
import Svg from "./svg"

import moutains from '@/assets/svgs/mountains.svg?raw'
import fish from '@/assets/svgs/fish.svg?raw'
import location from '@/assets/svgs/location.svg?raw'
import arrow from '@/assets/svgs/arrow.svg?raw'
import menu from '@/assets/svgs/menu.svg?raw'
import { AppContext } from "@/provider"
import { Link, useLocation } from "react-router-dom"
import { hashPath } from "@/utils"

const NavBar = () => {
    const {data} = useContext<any>(AppContext)
    const {pathname} = useLocation()
    return (
        <nav className="bg-red-070 backdrop-blur-[7.5px] py-4 boderb border-black-020 xl:py-2 lg:py-[10px]">
            <Container className="text-white flex items-center gap-[93px] box-content xl:px-8 justify-between">
                <div className="flex items-center w-full max-w-[105px] xl:max-w-[73px] lg:max-w-[105px]">
                    <h1 className="font-bold text-[15px] xl:text-[10.5px]">LOGO SAMPLE</h1>
                </div>
                <div className="flex justify-between w-full items-center xl:hidden">
                    <div className="flex gap-6 font-medium text-[16px]">
                        <a href="#" className="hover:text-[#F2542D] transition-all text-nowrap">{data.head_menu[0]}</a>
                        <a href="#" className="hover:text-[#F2542D] transition-all ml-[123px] xl:ml-0 text-nowrap">{data.head_menu[1]}</a>
                        <a href="#" className="hover:text-[#F2542D] transition-all ml-[74px] xl:ml-0 text-nowrap">{data.head_menu[2]}</a>
                        <a href="#" className="hover:text-[#F2542D] transition-all ml-[45px] xl:ml-0 text-nowrap">{data.head_menu[3]}</a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Svg url={moutains} />
                        <Svg url={fish} />
                        <Svg url={location} />
                        <button className="ml-1 group flex gap-2 items-center bg-[#F2542D] px-4 py-[8px] rounded-[40px]">
                            <div className="group-hover:max-w-[200px] duration-300 transition-all overflow-hidden w-full text-nowrap max-w-0">{data.head_menu[4]}</div>
                            <Svg url={arrow} className="max-w-6 w-full" />
                        </button>
                        <Link to={hashPath(pathname) === 'en' ? '/': '/en'} className="uppercase underline">{hashPath(pathname) === 'en' ? 'fr': 'en'}</Link>
                    </div>
                </div>

                <div className="gap-6 text-[16px] hidden xl:flex lg:hidden">
                <a href="#" className="hover:text-[#F2542D] transition-all">{data.head_menu[0]}</a>
                        <a href="#" className="hover:text-[#F2542D] transition-all ml-[123px] xl:ml-0">{data.head_menu[1]}</a>
                        <a href="#" className="hover:text-[#F2542D] transition-all ml-[74px] xl:ml-0">{data.head_menu[2]}</a>
                        <a href="#" className="hover:text-[#F2542D] transition-all ml-[45px] xl:ml-0">{data.head_menu[3]}</a>
                </div>
                <div className="hidden gap-4 items-center xl:flex lg:hidden">
                    <Svg url={moutains} />
                    <Svg url={fish} />
                    <Svg url={location} />
                    <button className="ml-1 group flex gap-2 items-center bg-[#F2542D] px-4 py-[8px] rounded-[40px]">
                        <div className="duration-300 transition-all overflow-hidden w-full text-nowrap text-[16px]">{data.head_menu[4]}</div>
                        <Svg url={arrow} className="max-w-6 w-full" />
                    </button>
                    <Link to={hashPath(pathname) === 'en' ? '/': '/en'} className="uppercase underline">{hashPath(pathname) === 'en' ? 'fr': 'en'}</Link>
                </div>

                <Svg url={menu} className="max-w-8 hidden lg:block" />
            </Container>
        </nav>
    )
}

export default memo(NavBar)