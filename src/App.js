import './App.css';
import Home from './home';  
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
    </Routes>
    </Router>
   </>
  );
}

export default App;
