import { ContactButton } from "../widgets/buttons";
import Navbar from "./Navbar";

export default function Header(): JSX.Element {
    return <div className="header">
        <Navbar/>
        <div className="baniere">
            <div className="header_center">
                <ContactButton/>            
                <p className="slogan">Etre belle est un devoir. L'accomplissement son devoir est signe de valeur.</p>
            </div>
        </div>
        
    </div>
}