import './App.css'
import { teste } from "./content/teste"

function App() {

  return (
    <div className="App">
      
      <h1>tcc de alice</h1>
      <div className="card">
        <p>
          {teste.content}
        </p>
        <p>
          {teste.link}
        </p>
      </div>
      
    </div>
  )
}

export default App
