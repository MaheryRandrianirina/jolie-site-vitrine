import { ButtonHTMLAttributes, ReactNode } from "react";

function Button({children, attributes}: {
    children: ReactNode,
    attributes: ButtonHTMLAttributes<string>
}): JSX.Element {
    return <button className={"btn " + attributes.className}>{children}</button>
}

function PrimaryButton({children, attributes}: {
    children: ReactNode,
    attributes?: ButtonHTMLAttributes<string>
}): JSX.Element {
    return <Button attributes={{
        className: "primary_btn " + attributes?.className
    }}>
        {children}
    </Button>
}

function SecondaryButton({children, attributes}: {
    children: ReactNode,
    attributes?: ButtonHTMLAttributes<string>
}): JSX.Element {
    return <Button attributes={{
        className: "secondary_btn " + attributes?.className
    }}>
        {children}
    </Button>
}

function ContactButton(): JSX.Element {
    return <PrimaryButton attributes={{className: "contact_btn"}}>
        <span>Nous contacter</span> 
        <svg viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
        </svg>
    </PrimaryButton>
}

export {PrimaryButton, ContactButton, SecondaryButton}