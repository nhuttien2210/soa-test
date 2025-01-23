import Container from "@/components/container"
import { memo, useContext, useMemo, useState } from "react"
import CenterTitle from "@/components/center-title"
import Map from "@/components/map-v2"

import moutain from '@/assets/svgs/mountains-3.svg?raw'
import fish from '@/assets/svgs/fish-3.svg?raw'
import location from '@/assets/svgs/location-3.svg?raw'

import moutain2 from '@/assets/svgs/mountains-2.svg?raw'
import fish2 from '@/assets/svgs/fish-2.svg?raw'
import location2 from '@/assets/svgs/location-2.svg?raw'

import Svg from "@/components/svg"
import clsx from "clsx"
import { IconType } from '@/components/map-v2'

import { mapData } from "./data"

import '../../assets/images/bg.png'
import { AppContext } from "@/provider";

const imgs = [
    moutain,
    fish,
    location,
]

const imgsActive = [
    moutain2,
    fish2,
    location2,
]

const types: IconType[] = ['snow', 'fishing', 'hunt']

const Block2 = () => {
    const [type, setType] = useState<IconType | string>('')
    const {data} = useContext<any>(AppContext)
    const itemsBtn = useMemo(() => {
        return data.bloc_2.cases.map((e:any, i:number) => {
            return {title: e, icon: imgs[i], iconActive: imgsActive[i], type: types[i]}
        })
    }, [data])

    const onClick = (i: IconType | string) => {
        if (type === i) {
            setType('')
            return
        }
        setType(i)
    }

    return (
        <div className="bg-[#FFF6F4] bg-[url('../../assets/images/bg.png')] bg-no-repeat bg-bottom py-[60px] sm:py-8">
            <Container className="">
                <CenterTitle>{data.bloc_2.title}</CenterTitle>
                <div className="mt-8 flex justify-center gap-5 sm:mt-5 sm:gap-2 sm:flex-wrap">
                    {itemsBtn.map((e: any, i: number) => {
                        return (
                            <button
                                onClick={() => onClick(e.type)} key={e.type}
                                className={clsx(
                                    "rounded-[40px] w-fit py-2 px-4 border-[1.5px] border-red-050 flex items-center gap-2 bg-white hover:bg-[#FFEDE8] transition-all sm:py-[6px]",
                                    {
                                        ['!bg-[#F2542D] !text-white']: type === e.type
                                    }
                                )}>
                                <Svg url={type === e.type ? e.iconActive : e.icon} className="max-w-7" />
                                <div className={clsx("text-[#562C2C] font-medium text-[20px] lg:text-[18px] sm:text-[14px]", {
                                    ['text-white']: type === e.type
                                })}>
                                    {e.title}
                                </div>
                            </button>
                        )
                    })}
                </div>
                {/* <MapContext.Provider value={{data, setData}}> */}
                    <Map data={mapData} typeFilter={type} />
                {/* </MapContext.Provider> */}
            </Container>
        </div>
    )
}

export default memo(Block2)