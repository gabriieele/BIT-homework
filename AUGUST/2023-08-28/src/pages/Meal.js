import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Ingredients } from './Ingredients'

const Meal = () => {
  const [data, setData] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
      .then(resp => resp.json())
      .then(resp => {
        const meal = resp.meals[0]
        console.log(meal)
        //meal.strYoutube = 'https://www.youtube.com/embed/' + meal.strYoutube.split('?v=')[1];
        meal.strYoutube = meal.strYoutube.replace('watch?v=', 'embed/')
        setData(meal)
      })
  }, [])

  return (
    <div className="container">
      <div className="mb-2">
        <Link to={'/'}>Home</Link>
      </div>
      <h1>Meal {id} details</h1>
      {data && (
        <div className="row mt-5">
          <div className="col-6">
            <img src={data.strMealThumb} alt={data.strMeal} className="mb-3" />
            <iframe
              width="100%"
              height="315"
              src={data.strYoutube}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-6">
            <h2>{data.strMeal}</h2>
            <ul>
              <li>
                Category:
                <Link to={'/category/' + data.strCategory}> {data.strCategory}</Link>
              </li>
              <li>
                Area:
                <Link to={'/area/' + data.strArea}> {data.strArea}</Link>
              </li>
            </ul>
            <h3>Ingredients</h3>
            <Ingredients data={data} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Meal
