import clsx from "clsx"
import { memo, ComponentProps, FC } from "react"

type Props = ComponentProps<'input'>

const Input: FC<Props> = ({ className, ...rest }) => {
    return <input
        className={clsx("w-full border border-brown-030 shadow-red-010 focus:outline-0 px-4 py-3 rounded-full text-[18px] tracking-[-0.126px] placeholder:text-[#aaa] lg:text-[16px] sm:text-[14px] sm:py-2", className)}
        {...rest}
    />
}

export default memo(Input)