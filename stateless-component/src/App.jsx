import './App.css'
import { Button } from './components'

function App() {
  handleClick = () => {
    e.target
  }

  return (
    <div className="App">
      <h2>Button component ( stateless )</h2>
      <Button onClick={handleClick}>Primary button</Button>
      <Button onClick={handleClick}>Secondary button</Button>
    </div>
  )
}

export default App
