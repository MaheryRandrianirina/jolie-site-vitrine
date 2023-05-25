import { useEffect } from "react"

export default function About(): JSX.Element {
    useEffect(()=> {
        document.title = "A propos"
    })
    return <div className="page about"></div>
}