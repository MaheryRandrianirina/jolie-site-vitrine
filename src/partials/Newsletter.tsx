import { ReactNode } from "react";
import { PrimaryButton } from "../widgets/buttons";

export default function Newsletter({title}: {
    title: string
}): JSX.Element {
    return <div className="newsletter">
    <p className="title">{title}</p>
    <form action="">
        <input type="text" placeholder="Nom et prénoms" />
        <textarea placeholder="Message"></textarea>
        <PrimaryButton>
            Envoyer
        </PrimaryButton>
    </form>
</div>
}