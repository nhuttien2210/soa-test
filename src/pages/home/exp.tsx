import Container from "@/components/container"
import { memo, useContext, useMemo } from "react"

import logo from '@/assets/svgs/logo.svg?raw'
import Svg from "@/components/svg"
import icecream from '@/assets/images/icecream.png'

import auth from '@/assets/svgs/auth.svg?raw'
import respect from '@/assets/svgs/respect.svg?raw'
import diver from '@/assets/svgs/diver.svg?raw'
import person from '@/assets/svgs/person.svg?raw'
import confort from '@/assets/svgs/confort.svg?raw'
import { AppContext } from "@/provider"
import '../../assets/images/icecream.png'
const items = [
    {
        icon: auth,
        title: 'Authenticité',
    },
    {
        icon: respect,
        title: 'Respect',
    },
    {
        icon: diver,
        title: 'Diversité',
    },
    {
        icon: person,
        title: 'Personnalisation',
    },
    {
        icon: confort,
        title: 'Confort',
    }
]

const Exp = () => {
    const { data } = useContext<any>(AppContext)

    const datas = useMemo(() => {
        return data.bloc_4.pictos.map((e: any, i: number) => {
            return { ...e, icon: items[i].icon }
        })
    }, [data])

    return (
        <Container className="pb-[140px] lg:pb-20 sm:p-0 sm:pb-10">
            <div className={`flex gap-6 items-start sm:bg-[url(../../assets/images/icecream.png)]`}>
                <div className="sm:px-4 sm:py-8">
                    <div className="w-[58.3%] xl:w-[65.2%] lg:w-[50%] sm:w-full sm:px-3 sm:py-4 sm:bg-white-060 sm:rounded-2xl sm:backdrop-blur-[7.5px]">
                        <div className="flex flex-col">
                            <Svg url={logo} className="max-w-[83px]" />
                            <div className="font-semibold text-[#F2542D] text-[48px] leading-[60px] uppercase mt-[5px] xl:text-[40px] lg:text-[32px] lg:leading-[42px] sm:text-[24px] sm:leading-[normal]">
                                {data.bloc_4.title} <span className="text-red-060">{data.bloc_4.subtitle}</span>
                            </div>
                        </div>
                        <div className="mt-[60px] flex gap-12 xl:mt-10 lg:mt-6 sm:mt-4">
                            <div className="w-full max-w-[81px] bg-[#BBB] h-[1px] mt-5 sm:hidden" />
                            <div>
                                <span className="text-[#562C2C] text-[28px] font-semibold capitalize xl:text-[24px] lg:text-[20px] sm:text-[16px]">{data.bloc_4.text_title}</span>
                                <p className="text-red-080 text-[18px] leading-[26px] mt-[19px] xl:text-[16px] xl:mt-2 lg:hidden">
                                    {data.bloc_4.text}
                                </p>
                            </div>

                        </div>
                        <p className="hidden sm:text-[14px] sm:leading-[normal] lg:block text-red-080 text-[18px] leading-[26px] mt-[19px] xl:text-[16px] xl:mt-2">
                            {data.bloc_4.text}
                        </p>
                    </div>
                </div>
                <div className="w-[41.7%] xl:w-[34.8%] lg:w-[50%] sm:hidden">
                    <img src={icecream} alt="" />
                </div>
            </div>
            <div className="mt-20 flex justify-between xl:px-8 lg:flex-wrap lg:justify-center lg:gap-x-8 lg:gap-y-6 sm:gap-4 sm:mt-6">
                {
                    datas.map((e: any, i: number) => {
                        return (
                            <div key={i} className="flex flex-col items-center">
                                <Svg url={e.icon} className="max-w-[58px] xl:max-w-14 lg:max-w-[44px] sm:max-w-[30px]" />
                                <div className="mt-4 text-[#562C2C] font-medium leading-[32px] text-[24px] xl:text-[20px] lg:text-[18px] sm:mt-[5px] sm:text-[16px">
                                    {e.title}
                                </div>
                                <div className="text-red-080 leading-[24px] text-[18px] text-center xl:text-[16px] lg:text-[14px]">
                                    {e.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default memo(Exp)