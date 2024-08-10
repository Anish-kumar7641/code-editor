import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Landing from './Pages/Home/Landing/Main.jsx';
import Home from './Pages/Home/Home.jsx'

function App() {
  return (
    <div className="App">
      <Landing/>
      {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
