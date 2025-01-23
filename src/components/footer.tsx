import { memo, useContext } from "react"
import Container from "./container"

import fb from '@/assets/svgs/fb.svg?raw'
import ig from '@/assets/svgs/ig-2.svg?raw'
import ytb from '@/assets/svgs/ytb.svg?raw'
import Svg from "./svg"
import { AppContext } from "@/provider"

const items = [
    fb,
    ig,
    ytb
]

const Footer = () => {
    const {data} = useContext<any>(AppContext)
    return (
        <footer className="bg-[#562C2C] py-14 xl:py-10 sm:py-8">
            <Container className="xl:px-8 sm:mt-24">
                <div className="flex justify-between border-b border-white-030 pb-14 xl:pb-10 sm:flex-col sm:pb-8">
                    <div className="flex flex-col text-[18px] text-white leading-[24px] xl:text-[16px] sm:text-center">
                        <div className="">
                            {data.footer.address.name}
                        </div>
                        <div>
                            {data.footer.address.phone}
                        </div>
                        <div>
                            {data.footer.address.location}
                        </div>
                    </div>
                    
                    <div className="flex flex-col text-[18px] text-white-060 xl:text-[16px] xl:gap-2 sm:gap-3 sm:text-center sm:mt-6">
                        <div className="">
                            {data.footer.links[0].name}
                        </div>
                        <div>
                            {data.footer.links[1].name}
                        </div>
                        <div>
                            {data.footer.links[2].name}
                        </div>
                    </div>

                    <div className="flex flex-col text-[18px] text-white-060 xl:text-[16px] xl:gap-2 sm:gap-3 sm:text-center">
                        <div className="">
                            {data.footer.links[3].name}
                        </div>
                        <div>
                            {data.footer.links[4].name}
                        </div>
                        <div>
                            {data.footer.links[5].name}
                        </div>
                    </div>

                    <div className="flex flex-col text-[18px] text-white-060 xl:text-[16px] xl:gap-2 sm:gap-3 sm:text-center">
                        <div className="">
                            {data.footer.links[6].name} 
                        </div>
                        <div>
                            {data.footer.links[7].name}
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="hidden gap-4 sm:flex justify-center mt-8">
                        {
                            items.map((e, i) =>{
                                return <Svg key={i} url={e} />
                            })
                        }
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <div className="text-white text-[18px] xl:text-[16px] sm:w-full sm:text-center">
                        © {data.footer.address.name} 2024
                    </div>
                    <div className="flex gap-4 sm:hidden">
                        {
                            items.map((e, i) =>{
                                return <Svg key={i} url={e} />
                            })
                        }
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default memo(Footer)