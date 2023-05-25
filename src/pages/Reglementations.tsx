import { useEffect } from "react"

export default function Reglementations(): JSX.Element {

    useEffect(()=>{
        document.title = "Reglementations"
    })
    
    return <div className="page reglementations"></div>
}