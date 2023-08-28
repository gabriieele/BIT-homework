import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Ingredients } from './Ingredients'
import FilterByLetter from './FilterByLetter'

const Home = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [randomMeal, setRandomMeal] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
      .then(resp => resp.json())
      .then(resp => setData(resp.meals))
  }

  const handleRandomMeal = e => {
    e.preventDefault()
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

      <div>{letters.map(letter => handleLetters(letter))}</div>

      <button className="btn btn-primary mt-3" onClick={handleRandomMeal}>
        I'm lucky
      </button>
      <div className="row mt-5">
        {data.map(value => (
          <div className="col-6 mb-3" key={value.idMeal}>
            <Link to={'/meal/' + value.idMeal}>
              <img src={value.strMealThumb} alt={value.strMeal} />
            </Link>
            <h3>{value.strMeal}</h3>
          </div>
        ))}
      </div>
      {randomMeal && (
        <div className="row">
          {randomMeal.map(value => (
            <>
              <div className="col-6">
                <img src={value.strMealThumb} alt={value.strMeal} className="mb-3" />
              </div>
              <div className="col-6">
                <h2>{value.strMeal}</h2>
                <ul>
                  <li>
                    Category:
                    <Link to={'/category/' + value.strCategory}> {value.strCategory}</Link>
                  </li>
                  <li>
                    Area:
                    <Link to={'/area/' + value.strArea}> {value.strArea}</Link>
                  </li>
                </ul>
                <h3>Ingredients</h3>
                <Link to={'/ingredients/' + value.ingredient}>
                  <Ingredients data={value} />
                </Link>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
