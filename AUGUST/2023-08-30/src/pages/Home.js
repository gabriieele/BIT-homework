import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  //visi postai
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(resp => resp.json())
      .then(resp => setData(resp))
  }, [])

  const handleAllCategories = () => {
    fetch('http://localhost:3000/posts')
      .then(resp => resp.json())
      .then(resp => setData(resp))
  }

  //pagal kategorijas
  const handleCategory = selectedCategory => {
    fetch('http://localhost:3000/posts?category=' + selectedCategory)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }

  const categories = [
    'Domenai',
    'Talpinimas',
    'El. paštas',
    'Naujienos',
    'Serveriai',
    'Sertifikatai',
    'Dizaino įrankis',
    'Infrastruktūra',
    'Žmonės',
    'Kita',
  ]

  //search
  const handleSearch = e => {
    e.preventDefault()
    fetch('http://localhost:3000/posts?q=' + search)
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
      <aside className="col-3 px-4">
        <div className="bg-body-secondary"></div>
        <form onSubmit={handleSearch}>
          <div className="input-group mb-3 mt-4">
            <span className="input-group-text ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ieškoti"
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </form>
        <h6 className="text-left mt-4">KATEGORIJOS</h6>

        <div className="mb-3">
          {categories.map(category => (
            <Link key={category} onClick={() => handleCategory(category)}>
              <li>{category}</li>
            </Link>
          ))}
        </div>
        <Link onClick={handleAllCategories} className="mb-4">
          Visos kategorijos
        </Link>
      </aside>
    </main>
  )
}

export default Home
