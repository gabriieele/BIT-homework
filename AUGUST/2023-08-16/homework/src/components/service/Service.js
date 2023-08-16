import './Service.css'
import service from './service.png'
import tele from './telemarketer.png'
import customer from './customer.png'

function Service() {
  return (
    <>
      <section className="third" id="third">
        <div className="container">
          <div className="ttl">
            <h1>Service</h1>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img src={service} className="icn" alt="service" />
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img src={tele} className="icn" alt="telemarketer" />
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img src={customer} className="icn" alt="customer" />
            </div>
          </div>
          <div className="row descr">
            <div className="col-4">
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum a
                elit a volutpat. Aenean turpis lectus, molestie nec consequat sit amet, bibendum a
                turpis. Curabitur tincidunt neque libero. Proin in viverra sapien, a ullamcorper
                sem.
              </p>
            </div>
            <div className="col-4">
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum a
                elit a volutpat. Aenean turpis lectus, molestie nec consequat sit amet, bibendum a
                turpis. Curabitur tincidunt neque libero. Proin in viverra sapien, a ullamcorper
                sem.
              </p>
            </div>
            <div className="col-4">
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum a
                elit a volutpat. Aenean turpis lectus, molestie nec consequat sit amet, bibendum a
                turpis. Curabitur tincidunt neque libero. Proin in viverra sapien, a ullamcorper
                sem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
