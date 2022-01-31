

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AllBooking from './pages/AllBooking/AllBooking';
import Booking from './pages/AllBooking/Booking';
import AllOrders from './pages/AllOrders/AllOrders';
import ContactUs from './pages/ContactUs/ContactUs';
import Extrapage from './pages/ExtraPage/Extrapage';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyBooking from './pages/MyBooking/MyBooking';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Register from './pages/Resigter/Register';
import Service from './pages/Service/Service';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <PrivateRoute path="/extra/:id">
            <Extrapage></Extrapage>
          </PrivateRoute>
          <Route exact path="/home" >
            <Home></Home>
          </Route>
          <PrivateRoute path="/contactus" >
            <ContactUs></ContactUs>
          </PrivateRoute>
          <PrivateRoute path="/mybooking" >
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/allorders" >
            <AllOrders></AllOrders>
          </PrivateRoute>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <Route path="/booking" >
            <Booking></Booking>
          </Route>
          <Route path="/allbooking" >
            <AllBooking></AllBooking>
          </Route>
          <Route path="/register" >
            <Register></Register>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
