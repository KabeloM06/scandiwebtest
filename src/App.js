import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      
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

  );
}

export default App;
