import Container from "@/components/container"
import { memo, useContext, useMemo } from "react"
import clsx from "clsx"

import item1 from '@/assets/images/item-1.webp'
import item2 from '@/assets/images/item-2.webp'
import item3 from '@/assets/images/item-3.webp'
import arrowGreen from '@/assets/svgs/arrow-green.svg?raw'
import Svg from "@/components/svg"
import CenterTitle from "@/components/center-title"
import { AppContext } from "@/provider"

const imgs = [
    item1,
    item2,
    item3,
]

const Block1 = () => {
    const {data} = useContext<any>(AppContext)
    const items = useMemo(() =>{
        return data.bloc_1.cases.map((e: any, i: number) => {
            e.img = imgs[i]
            return e
        })
    }, [data])
    return (
        <Container className="py-20 sm:py-16">
            <CenterTitle>{data.bloc_1.title}</CenterTitle>
            <div className="mt-4 text-center text-[24px] text-[#562C2C] leading-[30px] tracking-[0.25px] sm:text-[14px] sm:mt-0">{data.bloc_1.subtitle}</div>

            <div className="mt-10 flex gap-6 mb-[22px] xl:gap-8 sm:flex-col sm:!gap-6">
                {
                    items.map((e: any, i: number) => {
                        return (
                            <div key={e.img} className={clsx('w-full sm:mt-0', {['mt-[45px]']: i % 2 === 0})}>
                                <div className="w-full overflow-hidden group rounded-lg xl:h-[200px]">
                                    <img className="group-hover:scale-110 transition-all xl:h-full xl:object-cover" src={e.img} alt="" />
                                </div>
                                <div className="text-[#F2542D] text-[20px] font-medium mt-6 xl:mt-[20px] xl:text-[18px] lg:!text-[16px] lg:!mt-4 sm:!text-[12px]">{e.category}</div>
                                <div className="text-[#562C2C] text-[28px] font-medium leading-[32px] xl:text-[32px] lg:!text-[20px]">{e.tagline}</div>
                                <div className="text-red-080 text-[18px] leading-[24px] tracking-[-0.18px] mt-4 line-clamp-2 lg:!text-[16px] sm:mt-2">{e.description}</div>
                                <button className="flex gap-1 py-[10px] items-center justify-center mt-6 w-full max-w-[300px] border border-brown-030 rounded-full xl:max-w-fit xl:px-4 lg:!mt-4 sm:!mt-[35px]">
                                    <div className="text-[18px] font-medium leading-[20px] sm:text-[14px]">{e.cta}</div>
                                    <Svg url={arrowGreen} className="max-w-6" />
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default memo(Block1)