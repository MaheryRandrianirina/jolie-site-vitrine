import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, SyntheticEvent, useCallback, useContext, useEffect, useState } from "react"
import { MenuListElements, OnClickContext } from "../App";


type Mobile = {
    ok: boolean,
    className: string
}

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

    const [mobile, setMobile]: [
        mobile: Mobile, 
        setMobile: Dispatch<SetStateAction<Mobile>>
    ] = useState({ok:false, className: ""} as Mobile)

    useEffect(()=>{
        handleResponsive()
        window.addEventListener('resize', (e)=>{
            handleResponsive()
        })
    }, [mobile.ok, window.innerWidth])

    const handleResponsive = useCallback(()=>{
        if(window.innerWidth <= 600){
            setMobile(m => {
                return {ok: true, className: m.className === "" ? "mobile" : m.className}
            })
        }else {
            setMobile(m => {
                return {...m, ok: m.ok === true ? false : m.ok, className: m.className.includes("mobile") ? "" : m.className}
            })
        }
    }, [window.innerWidth, mobile])

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
        })
        
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

    const handleBarMenuClick: MouseEventHandler<SVGElement> = (e: SyntheticEvent)=>{
        setMobile(m => {
            return {...m, className: m.className + " active"}
        })
    }

    const {clickEventHandler, listElements} = useContext(OnClickContext)

    const generateMenuListElements: (menuList: MenuListElements) => JSX.Element[] = useCallback((menuList): JSX.Element[] => {
        let jsxArray: JSX.Element[] = []
        
        for(const className in menuList){
            const i = className as keyof MenuListElements
            if(menuList[i] !== ""){
                jsxArray.push(<li className={i} id={i} key={i} onMouseEnter={mobile.ok === false ? handleMenuHover : undefined} onClick={clickEventHandler}>{menuList[i]}</li>)
            }
        }
        return jsxArray
    }, [listElements, mobile.ok])

    const handleCloseMobileMenu: MouseEventHandler<SVGElement> = (e: SyntheticEvent) => {
        setMobile(m => {
            return {...m, className: m.className.includes('active') ? m.className.slice(0, m.className.indexOf('active')) : m.className}
        })
    }

    const menu = <ul className={"menu " + mobile.className} onMouseLeave={handleMouseLeave} onClick={(e)=> { e.stopPropagation()}}>
        {mobile.ok ? <li className="menu_header">
        <svg onClick={handleCloseMobileMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </li> : ""}
        {generateMenuListElements(listElements).map(li => {
            return li
        })}
        {bar.element !== null && bar.element}
    </ul>

    return <nav className="navbar">
        <div className="logo">JO<span className="logo_rose">LIE</span></div>
        {menu}
        {mobile.ok && <svg onClick={handleBarMenuClick} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        }
    </nav>
}