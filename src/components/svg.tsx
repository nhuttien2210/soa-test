import { FC, memo, ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
    url: string
} & ComponentProps<'div'>

const Svg:FC<Props> = ({url, className, ...rest}) => {
    return <div dangerouslySetInnerHTML={{__html: url}} className={twMerge(className)}  {...rest} />
}

export default memo(Svg);