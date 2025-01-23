import CenterTitle from "@/components/center-title"
import Container from "@/components/container"
import { memo, useContext } from "react"

import arrowLeft from '@/assets/svgs/arrow-left.svg?raw'
import arrowRight from '@/assets/svgs/arrow-right.svg?raw'
import Svg from "@/components/svg"
import { date, days } from "./data"
import clsx from "clsx"
import Editor from "@/components/editor"
import Input from "@/components/input"

import attachment from '@/assets/svgs/attachment.svg?raw'
import send from '@/assets/svgs/send.svg?raw'
import { AppContext } from "@/provider"

const Activity = () => {
    const { data } = useContext<any>(AppContext)
    return (
        <Container className="pt-[140px] pb-[60px] xl:pt-[78px] xl:px-8 sm:px-4">
            <CenterTitle>
                {data.bloc_2_2.title}
            </CenterTitle>

            <div className="py-6 px-8 rounded-3xl border border-brown-030 mt-10 shadow-red-010 xl:p-6 sm:p-4">
                <div className="flex items-center justify-center gap-2">
                    <Svg url={arrowLeft} />
                    <div className="text-[#562C2C] font-medium text-[20px] leading-[24px] sm:text-[16px] sm:max-w-[80px]">
                        July 2025
                    </div>
                    <Svg url={arrowRight} />
                </div>
                <div className="w-full grid grid-cols-7 mt-8 gap-3">
                    {days.map(e => {
                        return <div key={e} className="text-center text-[#562C2C] font-semibold leading-[24px]">{e}</div>
                    })}
                </div>
                <div className="w-full grid grid-cols-7 mt-6 gap-3 lg:mt-5 sm:gap-2 sm:mt-2">
                    {
                        date.map((e, i) => {
                            return (
                                <div key={i} className={clsx("text-center border rounded-lg py-2 px-4 lg:p-3 sm:p-2", {
                                    ["border-[#DFDFDF] bg-[#F5F5F5]"]: e.disabled,
                                    ["border-[#D7D7D7] bg-[#FFF]"]: e.note === 'Occupé',
                                    ["border-[#F2542D] bg-[#FFF4F1]"]: e.note === 'Libre'
                                })}>
                                    <div
                                        className={clsx("text-[20px] font-semibold leading-[24px] flex flex-col gap-2 lg:text-[18px] sm:text-[14px]", {
                                            ["text-[#ccc]"]: e.disabled,
                                            ["text-[#999]"]: e.note === 'Occupé',
                                            ["text-[#562C2C]"]: e.note === 'Libre'
                                        })}
                                    >
                                        {e.day}
                                        <div className={clsx("text-[18px] leading-[24px] font-normal lg:text-[16px sm:hidden", {
                                            ["text-[#AAA]"]: e.note === 'Occupé',
                                            ["text-[#F2542D]"]: e.note === 'Libre'
                                        })}>
                                            {e.note}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-10 sm:mt-6">
                <div className="flex gap-4 items-center">
                    <div className="text-[#562C2C] text-[24px] w-full max-w-[120px] lg:text-[20px] lg:max-w-[100px] sm:text-[16px] sm:max-w-[80px]">
                        {data.bloc_2_2.btn_1[0]}:
                    </div>
                    <Input placeholder={data.bloc_2_2.btn_1[1]} />
                </div>

                <div className="flex gap-4 items-center mt-5 sm:mt-2">
                    <div className="text-[#562C2C] text-[24px] w-full max-w-[120px] lg:text-[20px] lg:max-w-[100px] sm:text-[16px] sm:max-w-[80px]">
                        {data.bloc_2_2.btn_2[0]}:
                    </div>
                    <Input placeholder={data.bloc_2_2.btn_2[0]} />
                </div>

                <div className="flex gap-4 items-start mt-5 sm:mt-2">
                    <div className="text-[#562C2C] text-[24px] w-full max-w-[120px] lg:text-[20px] lg:max-w-[100px] sm:text-[16px] sm:max-w-[80px]">
                        {data.bloc_2_2.btn_3}:
                    </div>
                    <Editor />
                </div>

                <div className="flex gap-4 items-start mt-5 sm:mt-2">
                    <div className="text-[#562C2C] text-[24px] w-full max-w-[120px] lg:text-[20px] lg:max-w-[100px] sm:text-[16px] sm:max-w-[80px]">
                        {data.bloc_2_2.btn_4[0]}:
                    </div>
                    <div className="flex items-center gap-4 sm:flex-col sm:gap-1 sm:items-start">
                        <div className="flex">
                            <Svg url={attachment} className="sm:max-w-6" />
                            <span className="text-[#1E88F9] text-[20px] font-medium tracking-[-0.14px] lg:text-[18px] sm:text-[16px]">
                                {data.bloc_2_2.btn_4[1]}
                            </span>
                        </div>
                        <div className="text-[#999] text-[18px] tracking-[-0.126px] lg:text-[16px] sm:text-[14px]">
                            (*{data.bloc_2_2.btn_4[2]})
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
                <button className="w-full rounded-full border border-brown-030 max-w-[200px] py-3 text-[18px] font-medium text-[#562C2C] transition-all hover:bg-[#FFEDE8] lg:text-[16px] lg:max-w-[160px] sm:text-[16px] sm:py-2">
                    {data.bloc_2_2.btn_5}
                </button>
                <button className="w-full rounded-full max-w-[200px] py-3 text-[18px] font-medium text-[#fff] transition-all bg-[#F2542D] hover:bg-[#CA3E1B] flex items-center justify-center gap-2 lg:text-[16px] lg:max-w-[160px] sm:text-[16px] sm:py-2">
                    <div className="leading-[24px]">{data.bloc_2_2.btn_6}</div> <Svg url={send} className="max-w-6" />
                </button>
            </div>
        </Container>
    )
}

export default memo(Activity)