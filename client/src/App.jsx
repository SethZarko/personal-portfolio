import './App.css'

// Route Imports
import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
  } from "react-router-dom";

// Layouts
import { RootLayout } from "./layouts/RootLayout.jsx";

// Pages
import { Home } from './pages/Home.jsx'
import { Portfolio } from './pages/Portfolio.jsx'
import { About } from './pages/About.jsx'

import { NotFound } from "./pages/NotFound.jsx";
import { PortfolioElement } from './pages/PortfolioElement.jsx';
import { FullPortfolio } from './pages/FullPortfolio.jsx';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>

        <Route index element={<Home/>} />
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='project/:id' element={<PortfolioElement/>}/> 
        <Route path='full-portfolio' element={<FullPortfolio/>}/>
        <Route path='about' element={<About/>}/>

        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  )

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App