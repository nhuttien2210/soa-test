import clsx from "clsx"
import { memo, ComponentProps, ReactNode, FC } from "react"

type Props = {
    children: ReactNode
} & ComponentProps<'button'>

const Button: FC<Props> = ({className, children, ...rest}) =>{
    return <button className={clsx("max-w-[250px] py-[10px]")} {...rest}>{children}</button>
}

export default memo(Button)