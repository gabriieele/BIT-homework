import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from './components/Container/Container'
import Home from './pages/Home'
import Meal from './pages/Meal'
import Category from './pages/Category'
import Area from './pages/Area'
import FilterByLetter from './pages/FilterByLetter'
import FilterByIngredient from './pages/Ingredients'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<Meal />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/area/:area" element={<Area />} />
          <Route path="/filter/:letter" element={<FilterByLetter />} />
          <Route path="/ingredients/:ingr" element={<FilterByIngredient />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
