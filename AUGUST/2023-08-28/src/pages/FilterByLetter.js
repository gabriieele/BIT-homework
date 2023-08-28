import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const FilterByLetter = () => {
  const { letter } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + letter)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.meals) {
          setData(resp.meals)
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err)
      })
  }, [])

  return (
    <>
      <h1>Meals by letter {letter}</h1>
      {/* tikrinama ar yra patiekalu is tokios raides */}
      {data.length ? (
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
      ) : (
        <p>No meals found for this letter.</p>
      )}
    </>
  )
}

export default FilterByLetter
