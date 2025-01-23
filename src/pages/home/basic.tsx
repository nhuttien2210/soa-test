import Container from "@/components/container"
import { memo, useContext, useMemo, useState } from "react"

import basicImg from '@/assets/images/basic-img.png'
import basicImg2 from '@/assets/images/basic-img-2.png'
import basicImg3 from '@/assets/images/basic-img-3.png'
import basicImg4 from '@/assets/images/basic-img-4.png'
import basicImg5 from '@/assets/images/basic-img-5.png'
import basicImg6 from '@/assets/images/basic-img-6.png'

import ig from '@/assets/svgs/ig.svg?raw'
import arrow from '@/assets/svgs/arrow-white.svg?raw'
import Svg from "@/components/svg"
import { AppContext } from "@/provider"

const items = [
    basicImg2,
    basicImg3,
    basicImg4,
    basicImg5,
    basicImg6,
]

const Basic = () => {
    const {data} = useContext<any>(AppContext)

    const [selected, setSelected ] = useState<any>(0) 
    const datas = useMemo(() =>{
        const hashData = data.bloc_5.reviews.map((e: any, i: number) =>{
            return {...e, img: items[i], id: i}
        })
        return hashData
    }, [data])

    const dataBySelect = useMemo(() =>{
        return datas.find((e: any) => e.id === selected)
    }, [selected, datas])
    return (
        <div className="pt-[60px] pb-20 bg-green-00-cff lg:pt-11 xl:pb-[92px] lg:pb-[88px] sm:py-8"
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), #EAFCFF" }}
        >
            <Container className="sm:p-0">
                <div className="flex justify-between items-center sm:flex-col-reverse sm:gap-1 sm:px-4">
                    <div className="text-red-080 text-[18px] leading-[26px] w-full max-w-[564px] xl:text-[16px] sm:text-[14px] sm:leading-[normal]">
                        {data.bloc_5.text}
                    </div>
                    <div className="text-[#562C2C] text-[40px] leading-[54px] font-semibold uppercase text-right lg:text-[24px] lg:leading-[42px] sm:text-left sm:leading-[normal]">
                        {data.bloc_5.title}
                    </div>
                </div>

                <div className="mt-8 relative py-[52px] px-[105px] bg-no-repeat bg-center rounded-[20px] bg-cover xl:px-[60px] xl:py-11 lg:p-6 sm:p-4 sm:rounded-none" style={{backgroundImage: `url(${basicImg})`}}>
                    <div className="max-w-[1030px] w-full rounded-2xl overflow-hidden bg-[#FFF] top-[50%] left-[50%] m-auto pt-3 pb-6">
                        <div className="px-[10px] h-[463px] lg:h-[330px] sm:h-[150px]">
                            <img src={dataBySelect.img} alt="" className="h-full object-contain" />
                        </div>
                        <div className="mt-2 flex justify-between px-6 items-center">
                            <span className="text-[24px] font-semibold tracking-[0.24px] xl:text-[20px] sm:text-[16px]">{dataBySelect?.author}</span>
                            <div className="px-4 py-[6px] rounded-full border border-gray-010 xl:text-[20px] lg:text-[16px] sm:text-[14px]">{dataBySelect?.date}</div>
                        </div>

                        <p className="px-6 text-[#666] text-[18px] max-w-[70%] xl:text-[16px] sm:text-[14px] sm:max-w-full">
                        {dataBySelect?.review}
                        </p>
                    </div>
                </div>

                <div className="mt-[22px] flex gap-6 xl:gap-8 xl:mt-10 lg:flex-wrap lg:justify-center sm:px-4 sm:mt=6 sm:gap-[20px]">
                    {
                        datas.filter((e: any) => e.id !== selected).map((e:any, i: number) =>{
                            return (
                                <div key={i} className="relative w-full max-w-[292px] rounded-[20x] overflow-hidden cursor-pointer xl:max-w-[260px] lg:max-w-[369px] sm:max-w-[161px]"
                                    onClick={() => setSelected(e.id)}
                                >
                                    <img src={e.img} alt="" className="h-full object-cover lg:rounded-[20px] lg:h-[260px] sm:h-auto" />

                                    <div className="rounded-bl-[20px] rounded-br-[20px] absolute bg-red-060 w-full bottom-0 flex justify-between py-4 px-[20px]">
                                        <div className="flex items-center gap-[6px]">
                                            <Svg url={ig} className="xl:max-w-6" />
                                            <span className="text-white text-[18px] font-medium text-nowrap xl:text-[16px]">{e.author}</span>
                                        </div>
                                        <Svg url={arrow} className="xl:max-w-6" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mt-12 text-[#666] text-[24px] text-center xl:text-[16px] xl:mt-10 sm:mt-6 sm:text-[14px]">
                    {data.bloc_5.footer}
                </div>
            </Container>
        </div>
    )
}

export default memo(Basic)