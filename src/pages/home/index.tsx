import NavBar from "@/components/nav-bar";
import Banner from "./banner";
import Block1 from "./block-1";
import Block2 from "./block-2";
import Activity from "./activity";

import chat from '@/assets/svgs/chat.svg?raw'
import Svg from "@/components/svg";
import Carousel from "./carousel";
import Exp from "./exp";
import Basic from "./basic";
import Explore from "./explore";
import Footer from "@/components/footer";
import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    // const {pathname} = useLocation()
    // const navigate = useNavigate()
    // useEffect(() =>{
    //     if(pathname === '/'){
    //         navigate('/fr')
    //     }
    // }, [pathname])

    return (
        <>
            <header className="fixed w-full top-0 left-0 z-30">
                <NavBar />
            </header>
            <main>
                <Banner/>
                <Block1 />
                <Block2 />
                <Activity />
                <Carousel />
                <Exp />
                <Basic />
                <Explore />
            </main>
            <Footer />
            <Svg url={chat} className="max-w-11 fixed bottom-[80px] right-[148px] xl:right-10 xl:bottom-10" />
        </>
    )
}

export default Home;