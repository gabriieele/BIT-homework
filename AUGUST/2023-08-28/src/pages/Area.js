import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Area = () => {
  const { area } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https:/www.themealdb.com/api/json/v1/1/filter.php?a=' + area)
      .then(resp => resp.json())
      .then(resp => {
        const mealArea = resp.meals
        setData(mealArea)
      })
  }, [])

  return (
    <>
      <div className="mb-2">
        <Link to={'/'}>Home</Link>
      </div>
      <h1>Area: {area}</h1>
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
    </>
  )
}

export default Area
