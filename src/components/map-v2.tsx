import { ComponentProps, FC, memo, useCallback, useRef, useState } from "react"

import map from '@/assets/images/map.webp'

import fishing from '@/assets/svgs/fishing.svg?raw'
import hunt from '@/assets/svgs/hunt.svg?raw'
import snow from '@/assets/svgs/snow.svg?raw'
import Svg from "./svg"
import clsx from "clsx"

import mapName from '@/assets/svgs/map-anme.svg?raw'

export type IconType = 'fishing' | 'hunt' | 'snow'

export type Data = {
    id: number,
    type: IconType,
    img: string,
    title: string,
    webSite: string,
    phone: string,
    adress: string,
    top: number,
    left: number
}

type Props = {
    data: Data[],
    typeFilter: IconType | string,
} & ComponentProps<'div'>

const Map: FC<Props> = ({ data, typeFilter }) => {
    const [selectedMarker, setSelectedMarkerMap] = useState<Data | undefined>(undefined)
    const elRef = useRef<HTMLDivElement | null>(null)
    const renderIcon = useCallback((type: IconType) => {
        switch (type) {
            case 'fishing':
                return fishing
            case 'hunt':
                return hunt
            default:
                return snow;
        }
    }, [])

    return (
        <div className="relative mt-6 ">
            <Svg url={mapName} className="absolute top-4 left-4 z-10" onClick={() => setSelectedMarkerMap(undefined)} />
            <img onClick={() => setSelectedMarkerMap(undefined)} src={map} alt="" className={clsx('rounded-[20px] transition-all duration-300', {['brightness-50']: selectedMarker})} />
            
            {
                data.map((e) => {
                    return <Svg
                        key={e.id}
                        onClick={() => {
                            if(selectedMarker){
                                setSelectedMarkerMap(undefined)
                                return
                            }
                            if(typeFilter && (typeFilter !== e.type)) return
                            setSelectedMarkerMap(e)
                        }}
                        title={e.title}
                        url={renderIcon(e.type)}
                        className={clsx("absolute cursor-pointer w-full max-w-[52px]", {
                            ['opacity-50']: (typeFilter && (e.type !== typeFilter)) 
                            || selectedMarker && (selectedMarker.id !== e.id)
                        })}
                        style={{top: `${e.top}%`, left: `${e.left}%`}}
                    />
                })
            }
             {
          selectedMarker &&
            <div className='max-w-[321px] absolute w-full p-4 z-20 bg-white rounded-lg shadow-xl'  
            style={{
                top: `calc(${selectedMarker.top }% - 450px)`, 
                left: `calc(${selectedMarker.left }% - 130px)`
            }} 
            ref={elRef}>
              <div className='w-full rounded-xl overflow-hidden'>
                <img src={selectedMarker.img} alt="" />
              </div>
              <div className='text-[#562C2C] text-[20px] font-semibold mt-4'>{selectedMarker.title}</div>

              <div className='mt-4 flex gap-2 justify-start'>
                <div className='text-[#562C2C] text-[15px] leading-[20px]'>
                 {selectedMarker.adress}
                </div>
              </div>

              <div className='mt-4 flex gap-2 justify-start'>
                <div className='text-[#562C2C] text-[15px] leading-[20px]'>
                  <a href={selectedMarker.webSite} target='_blank'>{selectedMarker.webSite}</a>
                </div>
              </div>

              <div className='mt-4 flex gap-2 justify-start'>
                <div className='text-[#562C2C] text-[15px] leading-[20px]'>
                  <a href={`tel:${selectedMarker.phone}`}>{selectedMarker.phone}</a>
                </div>
              </div>
            </div>
        }
        </div>
    )
}

export default memo(Map)