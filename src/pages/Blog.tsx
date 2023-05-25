import { useEffect } from "react"

export default function Blog(): JSX.Element {
    useEffect(()=>{
        document.title = "Blog"
    })

    return <div className="page blog"></div>
}