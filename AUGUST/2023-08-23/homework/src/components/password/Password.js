import { useState, useEffect } from 'react'

const Password = () => {
  const [password, setPassword] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [symbols, setSymbols] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('passwords')))
  }, [password])

  useEffect(() => {
    //timeoutas kad nesipildytu slaptazodziai po viena simboli vos pradejus rasyti
    setTimeout(() => {
      handlePassword()
    }, '200')
  }, [inputValue, symbols, numbers])

  const handlePassword = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let newPassword = letters

    if (symbols) {
      newPassword += '~!@#$%^&*()-_+={}|;:<>?/'
    }
    if (numbers) {
      newPassword += '0123456789'
    }

    let generatedPasw = ''
    for (let i = 0; i < inputValue; i++) {
      const randSymbol = rand(0, newPassword.length - 1)
      generatedPasw += newPassword[randSymbol]
    }
    setPassword(generatedPasw)

    //praeita reiksme perduodama i masyva, kartu su naujai sugeneruotu masyvu
    setData(preValue => [...preValue, generatedPasw])
    localStorage.setItem('passwords', JSON.stringify([...data, generatedPasw]))
  }

  function rand(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <>
      <div className="display flexi flex-column">
        <p>Generated password: </p>

        <div className="p-3 text-primary-emphasis bg-light-subtle rounded-3">
          {/* /* split padalaina i masyva simbolius 
          tada tikinama ar symbols/numbers yra true ir ar char turi savyje kazka is duotu simboliu
          jei includes, tada pridedamos klases */}
          {password.split('').map(char => (
            <span
              className={
                symbols && '~!@#$%^&*()-_+={}|;:<>?/'.includes(char)
                  ? 'red'
                  : numbers && '0123456789'.includes(char)
                  ? 'blue'
                  : ''
              }
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="flexi mt-4">
        <div className="p-3 rounded-3 chooseBox flexi justify-content-start ">
          <form className="d-flex align-items-center">
            <label htmlFor="lengthInput" className="form-label me-2">
              Length
            </label>
            <input
              type="number"
              className="form-control"
              id="lengthInput"
              aria-describedby="emailHelp"
              //keiciama inputo reiksme, kai ivedame skaiciu
              onChange={e => {
                setInputValue(e.target.value)
              }}
            />
          </form>
          <div className="d-flex align-items-center">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNumbers"
                //jei uzchekinta, tai reiksme false
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
              />
              <label className="form-check-label" htmlFor="flexCheckNumbers">
                Numbers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckSymbols"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
              />
              <label className="form-check-label" htmlFor="flexCheckSymbols">
                Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">
        <h1 className="mt-5">10 last generated passwords</h1>
        <ul>
          {data
            .slice(-10)
            .reverse()
            .map((password, index) => (
              <li key={index}>{password}</li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Password
