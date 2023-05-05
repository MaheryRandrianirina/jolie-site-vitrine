import { ReactNode } from "react";

export default function Layout({children}: {children: ReactNode}): JSX.Element {
    return <div className="layout">
        {children}
    </div>
}