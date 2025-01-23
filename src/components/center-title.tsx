import { FC, memo, ReactNode } from "react"

type Props = {
    children: ReactNode,
    titleWidth?: string,
}

const CenterTitle:FC<Props> = ({children}) => {
    return (
        <div className="flex gap-10 items-center lg:justify-center">
            <div className="flex-grow bg-[#BBB] h-[2px] lg:hidden" />
            <div 
                className="text-center text-[#F2542D] text-[52px] uppercase font-semibold leading-[60px] xl:text-[40px] lg:text-[32px] md:text-[24px] sm:leading-[normal]"
            >
                {children}
            </div>
            <div className="flex-grow bg-[#BBB] h-[2px] lg:hidden" />
        </div>
    )
}

export default memo(CenterTitle)