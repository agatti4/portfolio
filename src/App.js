import NavBar from './NavBar.js';
import Home from './pages/Home.js';
import Pricing from './pages/Pricing.js';
import About from './pages/About.js';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio/pricing" element={<Pricing />} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
