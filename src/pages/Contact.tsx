import Newsletter from "../partials/Newsletter";
import Facebook from "../partials/SocialNetworks/Facebook";
import Gmail from "../partials/SocialNetworks/Gmail";
import Instagram from "../partials/SocialNetworks/Instagram";
import Linkedin from "../partials/SocialNetworks/Linkedin";

export default function Contact(): JSX.Element {
    return <div className="page contact">
        <div className="social_networks">
            <h4>VOUS POUVEZ NOUS CONTACTER SUR NOS DIFFERENTS RESEAUX SOCIAUX</h4>
            <Facebook/>
            <Instagram/>
            <Linkedin/>
            <Gmail/>
        </div>
        <Newsletter title="NOUS ENVOYER UN NEWSLETTER"/>
    </div>
}