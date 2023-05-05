
import './styles/main.css'
import Header from './partials/header'
import Description from './partials/Description'
import Prestations from './partials/prestations/Prestations'
import NewProducts from './partials/Products/NewProducts'
import Product from './partials/Products/Product'
import Services from './partials/Services/Services'
import Service from './partials/Services/Service'
import Footer from './partials/Footer'

function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Description/>
        <NewProducts>
          <Product className='product_one' imagesAttributes={{
            src: "src/assets/images/compte-gouttes-pot-creme-verre-noir-sans-marque-ensemble-emballages-pour-produits-cosmetiques-concept-soins-peau-beaute-maquette-espace-copie_105596-4448.webp",
            alt: "produit"
          }} description={{name: "PRODUIT 1"}}/>
          <Product className='product_two' imagesAttributes={{
            src: "src/assets/images/forfait-abonnement-boite-beaute-spa-soins-peau-produits-cosmetiques-maquillage-fond-rose-design-plat-concept-livraison-cadeaux-cosmetiques-naturels_360074-7398.jpg",
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
        <Footer/>
      </main>
    </div>
  )
}

export default App
