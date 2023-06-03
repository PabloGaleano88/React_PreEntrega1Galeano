import './App.css'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import bart from './assets/images/bart.jpg'
import bodies from './assets/images/bodies.jpg'
import mike from './assets/images/mike.jpg'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting="Aprovecha Nuestras ofertas y promos mensuales!!!" />
      <div className='cards_styles'>
      <Cards
        name="Pijama Bart"
        description="Pijama 'Yo no fui - Bart' talle 6 a 14, 100% algodón"
        price="$ 2300"
        image={bart}
        />
      <Cards
        name="Pijama/bodi Mike Wazowski"
        description="Pijama/body Monsters inc.talle 0 al 6, 100% algodón"
        price="$ 2100"
        image={mike}
        />
      <Cards
        name="Bodies x5"
        description="Bodies x 5 unidades, 100% algodón, talles de 0 a 5"
        price="$ 5000"
        image={bodies}
        />
        </div>
    </>
  )
}

export default App
