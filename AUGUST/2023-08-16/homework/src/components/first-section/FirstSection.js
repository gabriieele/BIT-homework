import './FirstSection.css'

function FirstSection() {
  return (
    <>
      <div className="container">
        <section id="first">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h1 id="first">Explore</h1>
                <h1>the world</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-5 description mt-5 mb-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nemo corrupti vel
                neque molestiae itaque eveniet magni, illo, eum quae, aliquid animi earum fugit
                placeat ab incidunt nostrum similique non. Sint odit fuga, vel, ut molestiae
                commodi, ad distinctio consequatur recusandae quo laborum animi eligendi id quasi
                atque nulla culpa a alias autem dolorum expedita voluptatum? Deserunt, repellat
                exercitationem tempore aperiam beatae maiores voluptate saepe fuga, expedita aliquid
                quam quibusdam.
              </p>
            </div>
            <div className="col-4"></div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FirstSection
