import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, SyntheticEvent, useCallback, useEffect, useState } from "react"
import ButtonDirections from "../ButtonDirections"

export default function Services({children}: {
    children: ReactNode
}): JSX.Element {

    const [directionButtons, setDirectionButtons]: [
        directionButtons: boolean, 
        setDirectionButtons: Dispatch<SetStateAction<boolean>>
    ] = useState(false)

    const [transform, setTransform]: [
        transform: number, 
        setTransform: Dispatch<SetStateAction<number>>
    ] = useState(0)

    useEffect(()=>{
        handleResponsive()
        window.addEventListener('resize', (e)=>{
            handleResponsive()
        })
        
    }, [window.innerWidth])

    const handleResponsive = useCallback(()=>{
        const windowWidth = window.innerWidth
        if(windowWidth < 600){
            setDirectionButtons(true)
        }else {
            setDirectionButtons(b => b === true && false)
        }
    }, [window.innerWidth])

    const handleDirectionButtonsClick: MouseEventHandler<HTMLDivElement> = (e: SyntheticEvent) => {
        const target = e.currentTarget
        const services = document.querySelector('.services') as HTMLDivElement
        const service = document.querySelector('.service') as HTMLDivElement
        if(target.classList.contains('left')){
            setTransform(t => {
                return t > 0 ? t - (service.offsetWidth + 50) : t
            })
        }else {
            setTransform(t => {
                return t < services.offsetWidth ? t + service.offsetWidth + 50 : t
            })
        }
    }

    return <div className="services">
        
        <h4>NOS SERVICES</h4>
        <div className="container" style={{
            transition:"transform .3s",
            transform: `translate3d(-${transform}px,0,0)`
        }}>
            <div className="elements">{children}</div>
        </div>
        {directionButtons && <ButtonDirections onClickButtons={handleDirectionButtonsClick}/>}
    </div>
}