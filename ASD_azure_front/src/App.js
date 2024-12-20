import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import ProductPage from './pages/ProductPage';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
import { UserProvider } from './context/UserContext';
import CartPage from './pages/CartPage';
import Login from './Users/Login';
import AccessLogsPage from './pages/AccessLogsPage';
import OrdersPage from './pages/OrdersPage';
import OrderItemsPage from './pages/OrderItemsPage';
import AccountPage from './pages/AccountPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <UserProvider>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/accesslogspage' element={<AccessLogsPage />} />
            <Route exact path='/addproduct' element={<AddProduct />} />
            <Route exact path='/adduser' element={<AddUser />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/editproduct/:id' element={<EditProduct />} />
            <Route exact path='/edituser/:id' element={<EditUser />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/orderitemspage/:id/:name' element={<OrderItemsPage />} />
            <Route exact path='/orderspage' element={<OrdersPage />} />
            <Route exact path='/productpage' element={<ProductPage />} />
            <Route exact path='/userpage' element={<UserPage />} />
            <Route exact path='/viewproduct/:id' element={<ViewProduct />} />
            <Route exact path='/viewuser/:id' element={<ViewUser />} />
            <Route exact path='/accountpage/' element={<AccountPage />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
