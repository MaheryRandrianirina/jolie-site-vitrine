import { ReactNode } from "react";

export default function Prestation({children}: {children: ReactNode}): JSX.Element {
    return <div className="prestation">
        {children}
    </div>
}