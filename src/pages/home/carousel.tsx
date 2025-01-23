import Container from "@/components/container"
import Svg from "@/components/svg"
import { memo, useContext, useMemo, useState } from "react"

import arrowRight from '@/assets/svgs/arrow-right-2.svg?raw'
import arrowRightRed from '@/assets/svgs/arrow-right-2-red.svg?raw'
import carousel1 from '@/assets/images/carousel-1.png'
import carousel2 from '@/assets/images/carousel-2.png'
import carousel3 from '@/assets/images/carousel-3.png'
import carousel4 from '@/assets/images/carousel-4.png'
import { AppContext } from "@/provider"

const items = [
    carousel1,
    carousel2,
    carousel3,
    carousel4
]

const Carousel = () => {
    const [mouseOver, setMouseOver] = useState(false)
    const {data} = useContext<any>(AppContext)

    const datas = useMemo(() =>{
        return data.bloc_3.cases.map((e: any, i: number) =>{
            return {...e, img: items[i], }
        })
    }, [data])

    return (
        <div className="py-20 overflow-hidden lg:pt-0">
            <Container className="flex items-end justify-between lg:items-center">
                <div className="text-[#F2542D] text-[48px] font-semibold leading-[60px] uppercase xl:text-[40px] lg:text-[32px] sm:text-center sm:text-[24px] sm:leading-[normal]">
                    {data.bloc_3.title}
                </div>
                <div
                    className="flex items-center text-[20px] border-b border-[#666] leading-[150%] capitalize gap-1 hover:text-[#F2542D] hover:border-[#F2542D] transition-all cursor-pointer lg:text-[16px] sm:hidden"
                    onMouseOver={() => setMouseOver(true)}
                    onMouseOut={() => setMouseOver(false)}
                    onTouchStart={() => setMouseOver(true)}
                    onTouchEnd={() => setMouseOver(false)}
                >
                    {data.bloc_3.more_info}
                    <Svg url={mouseOver ? arrowRightRed : arrowRight} className="max-w-6" />
                </div>
            </Container>
            <div className="w-full overflow-auto pr-10 mt-[35px] lg:mt-8 sm:mt-4">
                <div className="flex gap-14 relative left-[24%] xl:left-[5%] xl:gap-8 sm:gap-4">
                    {
                        datas.map((e: any, i: number) => {
                            return (
                                <div key={i} className="min-w-[340px] max-w-[340px] lg:min-w-[280px] lg:max-w-[280px] sm:min-w-[200px] sm:max-w-[200px]">
                                    <div className=" h-[340px] rounded-lg overflow-hidden lg:h-[280px] sm:h-[200px]">
                                        <img src={e.img} alt="" className="h-full object-cover" />
                                    </div>
                                    <div className="text-[#F2542D] text-[20px] font-medium mt-6 xl:text-[18px] lg:text-[16px] sm:mt-4 sm:text-[12px]">
                                        {e.category}
                                    </div>
                                    <div className="text-[#222] text-[28px] leading-[32px] font-medium xl:text-[24px] lg:text-[20px] sm:text-[16px] sm:leading-[normal]">
                                        {e.tagline}
                                    </div>
                                    <div className=" text-red-080 leading-[24px] mt-4 flex gap-2 xl:text-[16px] sm:mt-2 
                                        sm:text-[14px]
                                    ">
                                        <div className="line-clamp-3 pl-2 border-l border-[#BBB]">
                                            {e.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Carousel)