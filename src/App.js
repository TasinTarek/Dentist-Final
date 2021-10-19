
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Notfound/Notfound'

import Header from './components/Header/Header';

import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProviderr from './context/AuthProviderr';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      
      <AuthProviderr>
      <Router>
        <Header></Header>
        
        <Switch>
          
          <Route path exact="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path = "/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        
        
          
            
      </Router>
      </AuthProviderr>
      
    </div>
  );
}

export default App;
