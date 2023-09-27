import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddProduct from './pages/AddProduct';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/add-product' element={<AddProduct />} />
    </Routes>
  );
}

export default MainRoutes;