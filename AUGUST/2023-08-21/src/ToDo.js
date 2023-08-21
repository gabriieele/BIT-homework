import { useState } from 'react'

const ToDo = () => {
  const [value, setValue] = useState()
  const [list, setList] = useState([])
  const [indx, setEditIndex] = useState(-1) //laikomas editinamos uzduoties indeksas
  console.log(useState(-1))

  return (
    <div className="container mb-5">
      <h1>Užduočių tvarkyklė</h1>
      {/* ToDo Listo forma */}
      <form
        className="input-group mb-5 "
        onSubmit={e => {
          //console.log(value);
          //Paimame visas prieš tai buvusias reikšmes iš list masyvo ir įdedame į naują masyvą.
          //Pabaigoje įrašome naują reikšmę į masyvą
          //Reikšmes išsaugome su setList funkcija
          e.preventDefault()

          //jei edit mode, tada atnaujinama reiksme
          if (indx !== -1) {
            list[indx].value = value
            setList([...list])
            setEditIndex(-1) //isejimas is edit mode
          } else {
            //jei ne edit mode, tada pridedama nauja reiksme
            setList([...list, { value, done: false }])
          }
          //isvalomas inputo laukelis
          setValue('')
        }}
      >
        <input
          type="text"
          placeholder="Įveskite užduotį"
          className="form-control"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn btn-primary">{indx !== -1 ? 'Redaguoti' : 'Pridėti'}</button>
      </form>
      {list.map((data, index) => (
        <li className="d-flex justify-content-between my-2" key={index}>
          <span
            style={{ textDecoration: data.done ? 'line-through' : 'none' }}
            onClick={e => {
              // list[index].done = true
              list[index].done = !list[index].done
              setList([...list])
            }}
          >
            {data.value}
          </span>
          <span>
            <button
              className="btn btn-warning"
              onClick={e => {
                setEditIndex(index) //Nustatomas redaguojamo elemento indeksas
                setValue(data.value) //uzpidlomas inputo laukelis
                setList([...list])
                // e.target.textContent = 'Atšaukti'
              }}
            >
              Redaguoti
            </button>
            <button
              className="btn btn-danger"
              onClick={e => {
                list.splice(index, 1)
                setList([...list])
              }}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </div>
  )
}

export default ToDo
