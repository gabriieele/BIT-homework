import './Contacts.css'
import web from './internet.png'
import email from './mail.png'
import phone from './phn.png'

function Contacts() {
  return (
    <>
      <section className="fourth" id="fourth">
        <div className="container">
          <div className="ttll">
            <h1>Contact us</h1>
          </div>
          <div className="row mt-5 contacts d-flex justify-content-center align-items-center">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img src={web} className="icn" alt="website" />
              <p>www.yourwebsite.com</p>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img src={email} className="icn" alt="email" />
              <p>name@mail.com</p>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img src={phone} className="icn" alt="phone" />
              <p>+370 6 000 000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts
