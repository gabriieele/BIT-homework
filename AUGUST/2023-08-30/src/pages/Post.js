import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

const Post = () => {
  const { id } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/posts/' + id)
      .then(resp => resp.json())
      .then(resp => setData(resp))
  }, [])

  return (
    // nenaudojamas mapas, nes kreipiames i konkretu posta (nurodom id)
    data && (
      <div className="col-7 mx-auto">
        <h2>{data.title}</h2>
        <div className="d-flex gap-2 mt-4">
          <span className="bg-secondary-subtle px-2 py-1">Autorius: {data.author}</span>
          <time className="bg-secondary-subtle px-2 py-1">Paskelbtas: {data.date}</time>
          <span className="bg-secondary-subtle px-2 py-1">Kategorija: {data.category}</span>
        </div>
        <img src={data.image} alt={data.title} className="my-4" />
        {data.Content}
      </div>
    )
  )
}

export default Post
