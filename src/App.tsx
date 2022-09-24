import './App.css'
import { teste } from "./content/teste"
import LineTo from 'react-lineto';

function App() {

  return (
    <>
      <h1>regenascença</h1>
      <div className="App">
        
        <div>
          <div className="card">
            <p>
              {teste.content}
            </p>
          </div>
          <div className="card2">
            <p>
              {teste.responsabilidade}
            </p>
          </div>
          <LineTo from="card" to="card2" fromAnchor='bottom' toAnchor='top' borderColor='white' />
        </div>
        <div className='design'>
          <a  className='textoDesign' href={teste.link}  target="_blank">discrete design</a>
        </div>
        <LineTo from="card" to="design" fromAnchor='right' toAnchor='left' borderColor='white' />
        
      </div>
    </>
  )
}

export default App
