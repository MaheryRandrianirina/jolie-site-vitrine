import { ReactNode } from "react";

export default function NewProducts({children}: {children: ReactNode}): JSX.Element {
    return <div className="new_products">
        <h4>NOS NOUVEAUX PROUDITS</h4>
        {children}
    </div>
}