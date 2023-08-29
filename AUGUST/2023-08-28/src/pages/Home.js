import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Ingredients } from './Ingredients'

const Home = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [randomMeal, setRandomMeal] = useState([])
  const [showMeal, setShowMeal] = useState(false)
  const [categories, setCategories] = useState([])

  //all meals
  const handleSubmit = e => {
    setShowMeal(false)
    e.preventDefault()
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.meals)
      })
  }
  //random meal
  const handleRandomMeal = e => {
    e.preventDefault()
    setData([])
    setShowMeal(true)
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(resp => resp.json())
      .then(resp => {
        setRandomMeal(resp.meals)
      })
  }

  //sukuriama funkcija, atvaizduosianti raides
  const handleLetters = letter => {
    return (
      <>
        <Link key={letter} to={`/filter/${letter}`}>
          {letter}
          {/* //tarpelis {' '} */}
        </Link>{' '}
      </>
    )
  }

  //raidziu masyvas, kuris bus perduodamas funkcijai
  const letters = []
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i))
  }

  //select

  useEffect(() => {
    fetch('https:/www.themealdb.com/api/json/v1/1/categories.php')
      .then(resp => resp.json())
      .then(resp => {
        console.log('bandymas', resp)
        setCategories(resp.categories)
      })
  }, [])

  const handleSelect = selectedCategory => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + selectedCategory)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.meals)
      })
  }

  return (
    <>
      <h1>Meal database search</h1>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter meal title"
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
      {/* select */}
      <select
        className="form-select mt-3"
        aria-label="Default select example "
        onChange={e => handleSelect(e.target.value)}
      >
        <option selected>Select category</option>
        {categories &&
          categories.map((val, index) => (
            <option value={val.strCategory} key={index}>
              {val.strCategory}
            </option>
          ))}
      </select>

      <div className="mt-3">{letters.map(letter => handleLetters(letter))}</div>

      <button className="btn btn-primary mt-3" onClick={handleRandomMeal}>
        I'm lucky
      </button>
      {/*  meals */}
      <div className="row mb-3">
        {data.map(value => (
          <div className="col-6 mt-4 mb-3" key={value.idMeal}>
            <Link to={'/meal/' + value.idMeal}>
              <img src={value.strMealThumb} alt={value.strMeal} />
            </Link>
            <h3>{value.strMeal}</h3>
          </div>
        ))}
      </div>
      {/* im lucky content */}
      {showMeal && (
        <div className="row mt-4 mb-5">
          {randomMeal.map(value => (
            <>
              <div className="col-6">
                <img src={value.strMealThumb} alt={value.strMeal} />
              </div>
              <div className="col-6">
                <h2>{value.strMeal}</h2>

                <li>
                  Category:
                  <Link to={'/category/' + value.strCategory}> {value.strCategory}</Link>
                </li>
                <li>
                  Area:
                  <Link to={'/area/' + value.strArea}> {value.strArea}</Link>
                </li>

                <h3 className="mt-3">Ingredients</h3>
                <Ingredients data={value} />
                <h3 className="mt-3">Instructions</h3>
                <p>{value.strInstructions}</p>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
