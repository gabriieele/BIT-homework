import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <h1>Titulinis Puslapis</h1>
        <div className="mt-3">
          <Link to="/landing-page" className="btn btn-primary">
            Landing page
          </Link>
          <Link to="/video" className="btn btn-primary">
            Video homework
          </Link>
          <Link to="/products" className="btn btn-primary">
            Products list
          </Link>
          <Link to="/generator" className="btn btn-primary">
            Password generator
          </Link>
          <Link to="/calculator" className="btn btn-primary">
            Calculator
          </Link>
          <Link to="/to-do-list" className="btn btn-primary">
            To do list
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home
