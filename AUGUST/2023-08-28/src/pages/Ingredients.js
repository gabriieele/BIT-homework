import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Ingredients = ({ data }) => {
  const ingredients = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = data['strIngredient' + i]
    const measure = data['strMeasure' + i]

    ingredient &&
      ingredients.push(
        <li key={i}>
          {ingredient} {measure}
        </li>
      )
  }

  return ingredients
}

const FilterByIngredient = () => {
  const { ingr } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingr)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.meal)
        setData(resp.meals)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <h1>Meals which include {ingr}</h1>
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

export default FilterByIngredient
