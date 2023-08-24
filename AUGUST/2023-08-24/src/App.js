import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import LandingPage from './components/landingPage/LandingPage'
import Video from './components/video/Video'
import Products from './components/products/App'
import Generator from './components/passwordGenerator/App'
import Calculator from './components/calculator/App'
import ToDoList from './components/toDoList/List'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route
          path="/video"
          element={
            <>
              <Video
                videoID="dQw4w9WgXcQ"
                autoplay={true}
                color={true}
                controls={true}
                start="23"
                end="25"
                loop={true}
                seed="50"
                thumbnail={false}
              />
              <Video
                videoID="Zi_XLOBDo_Y"
                autoplay={false}
                color={false}
                controls={true}
                start="23"
                end="25"
                loop={true}
                seed="50"
                thumbnail={false}
              />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
