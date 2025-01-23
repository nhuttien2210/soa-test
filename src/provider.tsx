import { createContext, FC, ReactNode, useState } from "react"

type Props = {
    children: ReactNode
}

export const AppContext = createContext('data')

const Data: FC<Props> = ({children}) =>{

    const [data, setData] = useState<any>(undefined)

    return (
        <AppContext.Provider value={{data, setData}}>
            {children}
        </AppContext.Provider>
    )
}

export default Data