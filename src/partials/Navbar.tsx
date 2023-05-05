export default function Navbar():JSX.Element {
    return <nav className="navbar">
    <div className="logo">JO<span className="logo_rose">LIE</span></div>
    <ul className="menu">
        <li className="prestations">Offres</li>
        <li className="about">
            <a href="/about">A propos</a>
        </li>
        <li className="contact">
            <a href="/contact">Contact</a>
        </li>
        <li className="reglementations">Reglementations</li>
        <li className="bloh">
            <a href="/blog">Blog</a>
        </li>
    </ul>
</nav>
}