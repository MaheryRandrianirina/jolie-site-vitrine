import { MouseEventHandler } from "react"

export default function ButtonDirections({onClickButtons}: {
    onClickButtons: MouseEventHandler<HTMLDivElement>
}): JSX.Element {
    return <div className="button_directions">
        <div onClick={onClickButtons} className="left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div onClick={onClickButtons} className="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
}