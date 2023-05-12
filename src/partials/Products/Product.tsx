import { ImgHTMLAttributes } from "react";

export default function Product({className, imagesAttributes, description}: {
    className: string,
    imagesAttributes: ImgHTMLAttributes<string>,
    description: {name: string, commentaires?: string}
}): JSX.Element {
    return <div className={"product " + className}>
        <img src={imagesAttributes.src} alt={imagesAttributes.alt} />
        <div className="description">
            <p className="name">{description.name}</p>
            <div className="commentaires">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum architecto laborum, incidunt, quas cupiditate accusamus ab, alias perferendis explicabo vel tenetur? Tenetur veniam, eum eius voluptatum soluta vitae similique minus?</div>
        </div>
    </div>
}