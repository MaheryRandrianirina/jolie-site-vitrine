import { useEffect, useState } from "react";
import createObserver from "../lib/intersectionObserver";
import Description from "../partials/Description";
import NewProducts from "../partials/Products/NewProducts";
import Product from "../partials/Products/Product";
import Service from "../partials/Services/Service";
import Services from "../partials/Services/Services";

export default function Home({classname}: {
  classname?: string
}): JSX.Element {
  const [observerOptions, setObserverOptions]: [
    observerOptions: IntersectionObserverInit,
    setObserverOptions: Function
  ] = useState({
    rootMargin: "0px",
    threshold: [0.25]
  })

  useEffect(()=>{
      let targets: (Element | null)[] = [
        document.querySelector('.header'),
        document.querySelector('.entreprise_description'),
        document.querySelector('.product_one'),
        document.querySelector('.product_two'),
        document.querySelector('.services .elements'),
        document.querySelector('.plus'),
        document.querySelector('.copyright')
      ]

      try {
        createObserver(handleIntersection, targets, observerOptions)
      }catch(e){
        console.error(e)
      }
      
    })
    return <main className={"page home " + classname}>
    <Description/>
    <NewProducts>
      <Product className='product_one' imagesAttributes={{
        src: "src/assets/images/3.webp",
        alt: "produit"
      }} description={{name: "PRODUIT 1"}}/>
      <Product className='product_two' imagesAttributes={{
        src: "src/assets/images/4.webp",
        alt: "produit"
      }} description={{name: "PRODUIT 2"}}/>
    </NewProducts>
    <Services>
      <Service attributes={{
        className: "makeup",
        name: "MakeUp",
        commentaires: "Lorem Ipsum adezfz dfzef consndefz"
      }} imageAttributes={{
        src: "src/assets/images/service-makeup.webp"
      }}/>
      <Service attributes={{
        className: "manufacturing",
        name: "Fabrication de produits cosmétiques sur mésure",
        commentaires: "Lorem Ipsum adezfz dfzef consndefz"
      }} imageAttributes={{
        src: "src/assets/images/service-manufacturing.jpg"
      }}/>
    </Services>
  </main>
}

const handleIntersection: (entries: IntersectionObserverEntryInit[], 
  observer: IntersectionObserver) 
  => void = (entries, observer) => {
    
    entries.forEach(entry => {
      const target = entry.target
      if(target.classList.contains('header')){
        const slogan = target.querySelector('.slogan')
        if(entry.intersectionRatio >= 0.25){
          slogan?.classList.add('visible')
        }
      }else if(target.classList.contains("entreprise_description")){
        handleDescriptionObservation(target, entry)
      }else if(target.classList.contains('product')){
        handleNewProductsObservation(target, entry)
      }else if(target.classList.contains('elements')){
        handleServicesElementsObservation(target, entry)
      }
    })
}

const handleDescriptionObservation: ElementObservationHandler = (element, entry) =>{
  let elementsToBeVisibles: Element[] = []

  const descriptionsChildren = Array.from(element.children)
  descriptionsChildren.forEach(child => {
    
    if(child.classList.contains('boutique_img')){
      elementsToBeVisibles.push(child)
    }else if(child.classList.contains('text')){
      const textChildren = Array.from(child.children)
      textChildren.forEach(textChild => {
        elementsToBeVisibles.push(textChild)
      })
    }
  })
  
  elementsToBeVisibles.forEach(elementToBeVisible => {
    if(entry.intersectionRatio >= 0.25){
      elementToBeVisible.classList.add('visible')
    }
  })
}

const handleNewProductsObservation: ElementObservationHandler = (element, entry) => {
  if(entry.intersectionRatio >= 0.25){
    element.classList.add('visible')
  }
}

const handleServicesElementsObservation: ElementObservationHandler = (element, entry) => {
  if(entry.intersectionRatio >= 0.25){
    element.classList.add('visible')
  }
}

type ElementObservationHandler = (element: Element, entry: IntersectionObserverEntryInit)=>void