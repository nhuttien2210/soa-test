import { memo } from "react"

import fontsize from '@/assets/svgs/editor/fontsize.svg?raw'
import fontstyle from '@/assets/svgs/editor/fontstyle.svg?raw'
import hightlight from '@/assets/svgs/editor/hightlight.svg?raw'
import bold from '@/assets/svgs/editor/bold.svg?raw'
import italic from '@/assets/svgs/editor/italic.svg?raw'
import underline from '@/assets/svgs/editor/underline.svg?raw'
import strike from '@/assets/svgs/editor/strike.svg?raw'
import alignright from '@/assets/svgs/editor/alignright.svg?raw'
import aligncenter from '@/assets/svgs/editor/aligncenter.svg?raw'
import alignleft from '@/assets/svgs/editor/alignleft.svg?raw'
import numberlist from '@/assets/svgs/editor/numberlist.svg?raw'
import bulletlist from '@/assets/svgs/editor/bulletlist.svg?raw'
import image from '@/assets/svgs/editor/image.svg?raw'
import upload from '@/assets/svgs/editor/upload.svg?raw'
import Svg from "./svg"

const textNodes = [
    fontstyle,
    hightlight,
    bold,
    italic,
    underline,
    strike,
]

const alignNodes = [
    alignright,
    aligncenter,
    alignleft,
]

const listNodes = [
    numberlist,
    bulletlist,
]

const metaNodes = [
    image,
    upload,
]

const Editor = () => {
    return (
        <div className="w-full shadow-red-010 border border-brown-030 rounded-2xl overflow-hidden">
            <div className="flex border-b border-[#E2E8F0] sm:flex-wrap">
                <div className="w-fit py-2 px-4 border-r border-[#E2E8F0] flex">
                    <Svg  className="max-w-9 cursor-pointer sm:max-w-6" url={fontsize} />
                </div>
                <div className="flex p-2 gap-2 border-r border-[#E2E8F0] sm:border sm:flex-grow">
                    {
                        textNodes.map((e, i) =>{
                            return <Svg key={i} className="cursor-pointer sm:max-w-4" url={e} />
                        })
                    }
                </div>
                <div className="flex p-2 gap-2 border-r border-[#E2E8F0]  sm:border sm:flex-grow">
                    {
                        alignNodes.map((e, i) =>{
                            return <Svg key={i} className="cursor-pointer sm:max-w-4" url={e} />
                        })
                    }
                </div>
                <div className="flex p-2 gap-2 border-r border-[#E2E8F0]  sm:border sm:flex-grow">
                    {
                        listNodes.map((e, i) =>{
                            return <Svg key={i} className="cursor-pointer sm:max-w-4" url={e} />
                        })
                    }
                </div>
                <div className="flex p-2 gap-2 border-[#E2E8F0]  sm:border sm:flex-grow">
                    {
                        metaNodes.map((e, i) =>{
                            return <Svg key={i} className="cursor-pointer sm:max-w-4" url={e} />
                        })
                    }
                </div>
            </div>
            <div className="py-6 px-4">
                <h6 className="text-[#562C2C] text-[24px] font-semibold leading-[32px] tracking-[-0.288px] lg:text-[20px] sm:text-[18px]">Heading 6</h6>

                <p className="text-[#562C2C] text-[18px] leading-[160%] mt-2 lg:text-[16px] sm:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
            </div>
        </div>
    )
}

export default memo(Editor)