import { HTMLAttributes, ImgHTMLAttributes } from "react"
import { SecondaryButton } from "../../widgets/buttons"

interface Attributes<T> extends HTMLAttributes<T>{
    name: string,
    commentaires: string
}

export default function Service({attributes, imageAttributes, }: {
    attributes: Attributes<HTMLElement>,
    imageAttributes: ImgHTMLAttributes<string>
}): JSX.Element {
    return <div className={"service " + attributes.className}>
        <img src={imageAttributes.src} alt={imageAttributes.alt} />
        <div className="description">
            <p className="name">{attributes.name}</p>
            <div className="commentaiers">{attributes.commentaires}</div>
            <SecondaryButton>
                Découvrir
            </SecondaryButton>
        </div>
    </div>
}