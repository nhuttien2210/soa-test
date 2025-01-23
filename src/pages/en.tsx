import { AppContext } from "@/provider"
import Home from "./home"
import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { fetcher } from "@/aixos"
import { hashPath } from "@/utils"

const En = () => {
    const {setData ,data} = useContext<any>(AppContext)
    const {pathname} = useLocation()

    useEffect(() =>{
        fetcher(`/pages?lang=${hashPath(pathname)}`).then(e =>{
            setData(e[0])
        })
    }, [])
    return !data ? <>Loading ...</> : <Home />
}

export default En