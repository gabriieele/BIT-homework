import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
  const { cat } = useParams()
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(resp => resp.json())
      .then(resp => setData(resp))
  }, [])

  const handleCategory = selectedCategory => {
    fetch('http://localhost:3000/posts?category=' + selectedCategory)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }

  return (
    <main className="row">
      <h2 className="text-center text-uppercase pb-5">Blogas</h2>
      <section className="col-9">
        {/* map'as naudojamas nes imam is bendro masyvo */}
        {data.length > 0 &&
          data.map(value => (
            <div className="card mb-4" key={value.id}>
              <div className="row">
                <div className="col-5">
                  <img
                    src={value.image}
                    alt={value.title}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </div>
                <div className="col-7 p-3">
                  <h3>{value.title}</h3>
                  <p>{value.excerpt}</p>
                  <Link to={'/post/' + value.id} className="btn btn-primary">
                    Plačiau
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </section>
      <aside className="col-3">
        <div className="bg-body-secondary"></div>
        <h6 className="text-left mt-4">KATEGORIJOS</h6>

        <ul>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Domenai</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Talpinimas</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>El. paštas</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Naujienos</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Serveriai</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Sertifikatai</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Dizaino įrankis</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Infrastruktūra</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Žmonės</li>
          </Link>
          <Link onClick={e => handleCategory(e.target.textContent)}>
            <li>Kita</li>
          </Link>
        </ul>
      </aside>
    </main>
  )
}

export default Home
