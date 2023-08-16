import './About.css'
import icon from './user-data.png'

function About() {
  return (
    <>
      <section className="second " id="second">
        <div className="container">
          <div className="titleName">
            <h1>About us</h1>

            <div className="row justify-content-center align-items-center g-5">
              <div className="col-8 par">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum a
                  elit a volutpat. Aenean turpis lectus, molestie nec consequat sit amet, bibendum a
                  turpis. Curabitur tincidunt neque libero. Proin in viverra sapien, a ullamcorper
                  sem. In quis urna purus. Aliquam nunc nibh, ullamcorper in ex sit amet, pretium
                  egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
                  magna ex. Aenean ac nibh ut enim ultricies rhoncus a ut nisl. Nulla consequat nibh
                  sit amet mauris semper rhoncus. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Vestibulum massa odio, fringilla
                  tincidunt felis non, consectetur dapibus massa. In in ante ante. Etiam eget ex nec
                  dolor pharetra convallis non sed sem. Curabitur eu. In in ante ante. Etiam eget ex
                  nec dolor pharetra convallis non sed sem. Curabitur eu. In in ante ante. Etiam
                  eget ex nec dolor pharetra convallis non sed sem. Curabitur eu.
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center g-5">
                <img src={icon} className="illustration" alt="illustration" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
