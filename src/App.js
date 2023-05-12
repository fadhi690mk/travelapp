import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import List from "./components/List"
import Header from "./components/Header"
import Singleplace from './components/Singleplace';


function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<List />}/>
          <Route path='/:pass' element={<Singleplace />}/>
          
        </Routes>
    </Router>
    
  );
}

export default App;
