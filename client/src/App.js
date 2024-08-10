import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx'
import EditorPage from './Pages/Editor/EditorPage.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<EditorPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
