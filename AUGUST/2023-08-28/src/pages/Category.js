import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Category = () => {
  const { name } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https:/www.themealdb.com/api/json/v1/1/filter.php?c=' + name)
      .then(resp => resp.json())
      .then(resp => {
        const ctgr = resp.meals
        setData(ctgr)
      })
  }, [])

  return (
    <>
      <div className="mb-2">
        <Link to={'/'}>Home</Link>
      </div>
      <h1>Category: {name}</h1>
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

export default Category
