import { PrimaryButton } from "../widgets/buttons";

export default function Description(): JSX.Element {
    return <div className="entreprise_description">
        <img src="/src/assets/images/local.jpg" alt="boutique" className="boutique_img"/>
        <div className="text">
            <div className="name">JOLIE</div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor exercitationem saepe nostrum magni sit ad quaerat et perferendis voluptas mollitia vero, quibusdam vitae aliquid est placeat! Officiis, atque quibusdam.
            </div>
            <PrimaryButton attributes={{className: "know_more"}}>
            En savoir plus 
            </PrimaryButton>
        </div>
    </div>
}