import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Erreur from "./pages/Erreur"
import Logement from "./pages/Logement"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Homepage from "./pages/Homepage"
import annonce from './assets/annonce.json'

function App () {
      
  return (
        <BrowserRouter>
        <>
          <Header/> 
          <Routes>
            <Route index element={<Homepage annonce={annonce} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/logement/:id" element={<Logement annonce={annonce} />} />
            <Route path="/*" element={<Erreur/>}/>
          </Routes>
          <Footer/>
          </>          
        </BrowserRouter>        
        )
}

export default App 


