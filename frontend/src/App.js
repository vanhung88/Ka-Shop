import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages//ProductDetail';
import CartPage from './pages/CartPage';
import BackTop from './components/BackTop';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';
import ShippingPage from './pages/ShippingPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import OrderPage from './pages/OrderPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';
import Features from './pages/Features';
import ScrollTop from './contains/ScrollTop';
const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Header />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/features" exact component={Features} />
        <Route path="/placeorder" exact component={PlaceOrderPage} />
        <Route path="/shipping" exact component={ShippingPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/orders/:id" exact component={OrderPage} />
        <Route path="/products/:id" exact component={ProductDetail} />
        <Route path="/cart/:id?" exact component={CartPage} />
        <Route path="/admin/user/:id/edit" exact component={UserEditPage} />
        <Route path="/admin/product/:id/edit" component={ProductEditPage} />
        <Route path="/admin/productlist" exact component={ProductListPage} />
        <Route path="/admin/orderlist" exact component={OrderListPage} />
        <Route path="/admin/userlist" exact component={UserListPage} />
        <Route path="/search/:keyword" exact component={ShopPage} />
        <Route path="/" exact component={HomePage} />
        <BackTop />
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
};

export default App;
