import { ReactNode } from "react"

export default function Services({children}: {
    children: ReactNode
}): JSX.Element {
    return <div className="services">
        <h4>NOS SERVICES</h4>
        <div className="elements">{children}</div>
    </div>
}