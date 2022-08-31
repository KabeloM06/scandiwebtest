import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div className='page'>

      
      
      <BrowserRouter>
        
        <Routes>
        <Route index element={<ProductList />} />
        <Route path='addproduct' element={<ProductAdd />} />
        </Routes>
    
      </BrowserRouter>
      <footer className='footer'>
        <p>Scandiweb Test assignment</p>
      </footer>
    </div>
    </div>

  );
}

export default App;
