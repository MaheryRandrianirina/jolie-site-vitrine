import { Dispatch, MouseEventHandler, SetStateAction, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../widgets/buttons";

type hiddenDescription = {
    state?: boolean,
    className?: string
}

export default function Description(): JSX.Element {

    const [hiddenDescription, setHiddenDescription]: [
        hiddenDescription: hiddenDescription,
        setHiddenDescription: Dispatch<SetStateAction<hiddenDescription>>
    ] = useState({state: false, className: ""} as hiddenDescription)

    useEffect(()=>{
        handleResponsive()
        window.addEventListener('resize', (e)=>{
            handleResponsive()
        })
    }, [window.innerWidth])


    const handleResponsive = useCallback(()=>{
        const windowWidth = window.innerWidth
        if(windowWidth <= 600){
            setHiddenDescription(h => {
                return {...h, state: true}
            })
        }
    }, [window.innerWidth])

    const toggleDescription: MouseEventHandler<HTMLParagraphElement> = (e: SyntheticEvent) => {
        setHiddenDescription(h => {
            return {...h, state: !h.state, className: h.className === "" ? "visible_description" : ""}
        })
    }
    
    return <div className="entreprise_description">
        <img src="/src/assets/images/local.jpg" alt="boutique" className="boutique_img"/>
        <div className={"text " + hiddenDescription.className}>
            <div className={"name"}>JOLIE</div>
            <div className={"description"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor exercitationem saepe nostrum magni sit ad quaerat et perferendis voluptas mollitia vero, quibusdam vitae aliquid est placeat! Officiis, atque quibusdam.
            </div>
            <PrimaryButton attributes={{className: "know_more"}}>
            En savoir plus 
            </PrimaryButton>
        </div>
        {"state" in hiddenDescription !== null && 
            <p className={"show_description"} 
            onClick={toggleDescription}>{hiddenDescription.state ? "Afficher la description" : "Cacher la description"}</p>
        }
    </div>
}