import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const apiKey = "moJ96EKXE5oBocyVoIZ84oN03sLZs8j3"
  const [giphy, setGiphy] = useState(null)
  const getGiphy = async (searchTerm) => {
    const response = await fetch(`api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`)
    const data = await response.json()
    setGiphy(data)
  }
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
