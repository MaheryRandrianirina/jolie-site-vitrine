import { PrimaryButton } from "../widgets/buttons";
import Newsletter from "./Newsletter";
import Facebook from "./SocialNetworks/Facebook";
import Gmail from "./SocialNetworks/Gmail";
import Instagram from "./SocialNetworks/Instagram";
import Linkedin from "./SocialNetworks/Linkedin";

export default function Footer({className, excludeFromFooter}: {
    className?: string,
    excludeFromFooter?: string[]
}): JSX.Element {

    const footerClassname: string = className !== undefined ? "footer " + className : ""

    return <footer className={footerClassname}>
        <div className="plus">
            {!excludeFromFooter?.includes('reglementations') ? <div className="reglementations">
                <p className="title">Pages de réglémentations</p>
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/confidentialite">Politique de confidentialité</a>
            </div> : ""}
            {!excludeFromFooter?.includes('contact') ? <div className="Contact">
                <p className="title">Contact</p>
                <Facebook/>
                <Instagram/>
                <Linkedin/>
                <Gmail/>
            </div> : ""}
            {!excludeFromFooter?.includes('newsletter') ? <Newsletter title="Newsletter"/> : ""}
        </div>
        <div className="copyright">Copyright - 2023 - Mahery Randrianirina. Tous droits réservés.</div>
    </footer>
}