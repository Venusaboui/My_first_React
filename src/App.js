
// import './index.css';
import Searchbox  from './searchbox';
import Navbar from './navbar';
import Dashboard from './dashboard';
import Otherboard from './otherboard';
import Home from './Home';
import Notif from './Notifications';
import Profile from './profile';
import Collections from './collections';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  // const title ='Welcome to the blog';
  // const likes = '50';
  // const link ="https://adminbom.smobilpay.integration.maviance.info/login";
    

  // const person = {name: 'Yoshi', age: 30};
  return (
    <Router>
      <div className="App">
        <Searchbox/>
       
          <div className="content">
            <Dashboard/>
           <div className="maincontainer">
            <Switch>
                <Route exact path="/home">  
                  <Home/>
                </Route>

                <Route path="/collections">  
                <Collections/>
                </Route>

                <Route path="/uploads">  
                </Route>

                <Route path="/liked">  
                
                </Route>

                <Route exact path="/notifications"> 
                  <Notif/> 
                </Route>

                <Route path="/language">  
                </Route>

                <Route path="/profile">  
                <Profile/>
                </Route>
              </Switch>

           </div>
           <div className="leftside">
           <Navbar/>
           <Otherboard/>
           </div>
           
            
          </div>
            
      </div>
    </Router>
  );
}

export default App;
