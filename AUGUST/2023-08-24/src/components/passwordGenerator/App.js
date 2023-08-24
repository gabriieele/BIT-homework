import './App.css'
import Title from './titles/Title'
import Password from './password/Password'

function Generator() {
  return (
    <div className="allDoc">
      <div className="container">
        <Title />
        <Password />
      </div>
    </div>
  )
}

export default Generator
