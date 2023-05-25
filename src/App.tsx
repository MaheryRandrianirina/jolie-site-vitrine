
import './styles/main.css'
import Header from './partials/header'
import { Context, Dispatch, MouseEventHandler, SetStateAction, SyntheticEvent, createContext, useState } from 'react'
import Home from './pages/Home'
import Supplies from './pages/Supplies'
import Contact from './pages/Contact'
import Reglementations from './pages/Reglementations'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './partials/Footer'

type MenuListElements = {
  supplies?: string,
  contact?: string,
  reglementations?: string,
  about?: string,
  blog?: string,
  home?: string,
  exclude?: "supplies" | "contact" | "reglementations" | "about" | "blog" | "home"
}

export const OnClickContext: Context<{
  clickEventHandler: MouseEventHandler<HTMLLIElement | HTMLButtonElement>,
  listElements: MenuListElements
}> = createContext({
  clickEventHandler: (e)=> {
    e.preventDefault()
  },
  listElements: {} satisfies MenuListElements
})

function App() {
  const menuListElementsDefault = {
    supplies: "Offres",
    contact: "Contact",
    reglementations: "Reglementations",
    about: "A propos",
    blog: "Blog"
  }

  const [page, setPage]: [
    page: Page,
    setActivePage: Dispatch<SetStateAction<Page>>
  ] = useState({
    active: <Home/>,
    baniere: true,
    menuListElements: menuListElementsDefault,
    footer: {
      className: "home",
      toExclude: []
    }
  } as Page)

  const handleClickMenu: MouseEventHandler<HTMLLIElement> = (event: SyntheticEvent) => {
    event.preventDefault()
    const target = event.currentTarget
    const targetClassname: string = target.id
    
    if(window.innerWidth <= 600){
      const mobileMenu = document.querySelector('.menu.mobile')
      if(mobileMenu?.classList.contains('active')){
        mobileMenu.classList.remove('active')
      }
    }

    switch(targetClassname){
      case "home":
        setPage({
            active: <Home/>,
            baniere: true,
            menuListElements: menuListElementsDefault,
            footer: {
              className:targetClassname,
              toExclude: []
            }
        })
        break
      case "contact":
        setPage({
          active: <Contact/>,
          baniere: false,
            menuListElements: {home: "Accueil", ...menuListElementsDefault, contact: ""},
          footer: {
            className: targetClassname,
            toExclude: ["contact", "newsletter"]
          }
        })
        break
      case "reglementations":
        setPage({
          active: <Reglementations/>,
          baniere: true,
            menuListElements: {home: "Accueil", ...menuListElementsDefault, reglementations: ""},
          footer: {
            className: targetClassname,
            toExclude: ["reglementations"]
          }
        })
        break
      case "about":
        setPage({
          active: <About/>,
          baniere: true,
            menuListElements: {home: "Accueil", ...menuListElementsDefault, about: ""},
          footer: {
            className: targetClassname,
            toExclude: []
          }
        })
        break
      case "supplies":
        setPage({
          active: <Supplies/>,
          baniere: true,
          menuListElements: {home: "Accueil", ...menuListElementsDefault, supplies: ""},
          footer: {
            className: targetClassname,
            toExclude: []
          }
        })
        break
      case "blog":
        setPage({
          active: <Blog/>,
          baniere: true,          
          menuListElements: {home: "Accueil", ...menuListElementsDefault, blog: ""},
          footer: {
            className: targetClassname,
            toExclude: []
          } 
        })
        break
      case "contact_btn": 
        setPage({
          active: <Contact/>,
          baniere: false,
          menuListElements: {home: "Accueil", ...menuListElementsDefault, contact: ""},
          footer: {
            className: targetClassname,
            toExclude: ["contact", "newsletter"]
          }
        })
        break
    }
  }
  const handleClickBody: MouseEventHandler<HTMLDivElement> = (e:SyntheticEvent) => {
    e.preventDefault()
    document.querySelector('.menu.mobile')?.classList.remove('active')
  }
  
  return (
    <div className="App" onClick={handleClickBody}>
      <OnClickContext.Provider value={{
        clickEventHandler: handleClickMenu,
        listElements: page.menuListElements
      }}>
        <Header baniereState={page.baniere} activePageClassname={page.footer.className}/>
      </OnClickContext.Provider>
      {page.active}
      <Footer className={page.footer.className} excludeFromFooter={page.footer.toExclude}/>
    </div>
  )
}

type Page = {
  active: JSX.Element,
  baniere: boolean,
  menuListElements: MenuListElements,
  footer: {
    className: string,
    toExclude: string[]
  }
}

type BaniereStateType = {
  active: boolean,
  classNameToInactive: string
}

export type { MenuListElements, BaniereStateType }

export default App


