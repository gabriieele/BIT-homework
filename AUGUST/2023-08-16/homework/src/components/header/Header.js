import logo from './pageLogo.png'
import './Header.css'

function Header() {
  return (
    <>
      <div className="container">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg">
            <div>
              <img src={logo} className="App-logo me-2" alt="logo" />
              <span className="logoTitle">YOUR LOGO</span>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={changeNav} href="#first">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={changeNav} href="#second">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={changeNav} href="#third">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={changeNav} href="#fourth">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}
const changeNav = event => {
  const a = document.querySelectorAll('.nav-link')
  a.forEach(link => link.classList.remove('active'))
  event.target.classList.add('active')
}

export default Header
