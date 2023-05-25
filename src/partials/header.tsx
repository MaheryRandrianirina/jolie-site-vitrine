
import { useEffect, useState } from "react";
import { ContactButton } from "../widgets/buttons";
import Navbar from "./Navbar";

const Header = ({baniereState, activePageClassname}: {
    baniereState: boolean,
    activePageClassname: string
}): JSX.Element => {
    const [activeBaniere, setActiveBaniere] = useState(true)

    useEffect(()=>{
        const baniere = document.querySelector('.baniere')
        if (baniereState === false && baniere !== null) {
            if(!baniere.classList.contains('inactive_baniere')){
                baniere.classList.add("inactive_baniere")
                baniere.addEventListener('transitionend', ()=>{
                    setActiveBaniere(false)
                })
            }
        }else if(baniereState === false && baniere === null){
            setActiveBaniere(false)
        } else {
            setActiveBaniere(true)
        }
    })
    

    const shrunkClassName: string = activeBaniere === false ? "shrunk" : ""

    return <div className={"header " + shrunkClassName}>
        <Navbar />
        {activeBaniere && <div className="baniere" >
            <div className="header_center">
                <ContactButton/>            
                <p className="slogan">Etre belle est un devoir. L'accomplissement son devoir est signe de valeur.</p>
            </div>
        </div>}
    </div>
}

export default Header

