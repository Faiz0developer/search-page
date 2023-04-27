import './App.css';
import Header from './component/UI/header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Slider from './component/UI/Slider';
import Store from './component/UI/store/Store';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState([]);
  const [searchInput, setSearchInput] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <Header onSetInput={setInputValue} onSearchInput={setSearchInput}/>
      </header>
      <main>
        <Slider/>
        <Store inputValue={inputValue} searchInput={searchInput}/>
      </main>
    </div>
  );
}

export default App;
