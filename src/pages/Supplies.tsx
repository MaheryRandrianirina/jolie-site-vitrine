
import { useEffect } from "react";
import Product from "../partials/Products/Product";
import createObserver from "../lib/intersectionObserver";

export default function Supplies(): JSX.Element {
    
    useEffect(()=>{
        try {
            createObserver(handleObservation, Array.from(document.querySelectorAll('.product')), {
                root: document.querySelector('.page .supplies'),
                threshold: 0.25
            })
        }catch(e){
            console.error(e)
        }
    })

    return <div className="page supplies">
        <div className="selling">
            <h2>VENTES DE PRODUITS COSMETIQUES</h2>
            <div className="selling_description">
                <p>Nous vendos des produits cosmétiques haut de gamme. Ces produits sont fabriqués dans notre usine
                par nos brillants ingénieurs et docteurs. Nous faisons attention à ce que les produits soient adaptés à
                tous types de peaux. Des tests sont faits avant la mise sur le marché de ces produits afin de garantir
                leur qualité ainsi que son impact sur la santé du visage.</p> 
                <p>Après toutes ces étapes franchies, les produits sont mis en vente dans nos boutiques ainsi que dans
                    les boutiques partenaires.</p>
            </div>
            <h3>ECHANTILLON DE NOS PRODUITS</h3>
            <div className="products">
                <Product className="product_one" imagesAttributes={{
                    src: "src/assets/images/1.webp",
                    alt: "produit à vendre"
                }} description={{
                    name: "PRODUIT 1",
                    commentaires: "Lorem Ipsum"
                }}/>
                <Product className="product_two" imagesAttributes={{
                    src: "src/assets/images/2.webp",
                    alt: "produit à vendre"
                }} description={{
                    name: "PRODUIT ",
                    commentaires: "Lorem Ipsum"
                }}/>
                <Product className="product_three" imagesAttributes={{
                    src: "src/assets/images/3.webp",
                    alt: "produit à vendre"
                }} description={{
                    name: "PRODUIT 3",
                    commentaires: "Lorem Ipsum"
                }}/>
                <Product className="product_four" imagesAttributes={{
                    src: "src/assets/images/4.webp",
                    alt: "produit à vendre"
                }} description={{
                    name: "PRODUIT 4",
                    commentaires: "Lorem Ipsum"
                }}/>
                <Product className="product_five" imagesAttributes={{
                    src: "src/assets/images/5.jpg",
                    alt: "produit à vendre"
                }} description={{
                    name: "PRODUIT 5",
                    commentaires: "Lorem Ipsum"
                }}/>
                <Product className="product_six" imagesAttributes={{
                    src: "src/assets/images/6.jpg",
                    alt: "produit à vendre"
                }} description={{
                    name: "PRODUIT 6",
                    commentaires: "Lorem Ipsum"
                }}/>
            </div>
        </div>
    </div>
}

const handleObservation: (entries: IntersectionObserverEntryInit[], 
    observer: IntersectionObserver) 
    => void = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio >= 0.25){
                console.log(entry.target)
                entry.target.classList.add('visible')
            }
        })
}