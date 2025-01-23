import { memo, ComponentProps, ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: ReactNode
} & ComponentProps<'div'>

const Container: FC<Props> = ({children, className, ...rest}) => {
    return <div className={twMerge('max-w-[1240px] m-auto px-4' , className)} {...rest}>{children}</div>
}

export default memo(Container);