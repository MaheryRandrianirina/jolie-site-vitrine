import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, SyntheticEvent, useCallback, useContext, useState } from "react"
import { MenuListElements, OnClickContext } from "../App";

export default function Navbar():JSX.Element {
    const [bar, setBar]: [
        bar:{
            element: ReactNode | null,
            width: number
        },
        setBar: Dispatch<SetStateAction<{ element: ReactNode; width: number; }>>
    ] = useState({
        element: null as ReactNode | null,
        width: 0
    })

    const handleMenuHover: MouseEventHandler<HTMLLIElement> = (event: SyntheticEvent) => {
        const target = event.currentTarget as HTMLElement
        const targetRect = target.getBoundingClientRect()
        const menu = document.querySelector('.menu') as HTMLElement
        
        setBar({
            element: <p className="bar" style={{
                position: "absolute",
                left: `${targetRect.left - menu.offsetLeft}px`,
                bottom: "-16px",
                height: "2px",
                width: `${targetRect.width}px`,
                background: "#FF82A9",
                zIndex: "10",
                transition: "width .3s"
            }}></p>,
            width: targetRect.width
        } )
    }

    const handleMouseLeave: MouseEventHandler<HTMLUListElement> = useCallback((event: SyntheticEvent) => {
        event.preventDefault()

        const barElement = document.querySelector('.bar') as HTMLElement
        if(barElement !== null){
            barElement.style.width = `0px`
            barElement.addEventListener('transitionend', (event)=>{
                setBar({
                    element:null,
                    width: 0
                })
            })
        } 
    }, [bar])

    const {clickEventHandler, listElements} = useContext(OnClickContext)
    const generateMenuListElements: (menuList: MenuListElements) => JSX.Element[] = useCallback((menuList): JSX.Element[] => {
        let jsxArray: JSX.Element[] = []
        
        for(const className in menuList){
            const i = className as keyof MenuListElements
            if(menuList[i] !== ""){
                jsxArray.push(<li className={i} key={i} onMouseEnter={handleMenuHover} onClick={clickEventHandler}>{menuList[i]}</li>)
            }
        }
        return jsxArray
    }, [listElements])

    return <nav className="navbar">
    <div className="logo">JO<span className="logo_rose">LIE</span></div>
    <ul className="menu" onMouseLeave={handleMouseLeave}>
        {generateMenuListElements(listElements).map(li => {
            return li
        })}
        {bar.element !== null && bar.element}
    </ul>
</nav>
}