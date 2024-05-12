import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Checkout from './pages/checkout';
import { UIProvider } from './context';

function App() {
  return (
    <div className="App">
    <UIProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/checkout" element={<Checkout/>}/> */}
      </Routes>
    </Router>
    </UIProvider>
    </div>
  );
}

export default App;
