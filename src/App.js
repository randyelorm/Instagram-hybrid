

import Navbar from "./Components/NAVBAR/Navbar"
import Hero from "./Components/HERO/Hero"
import Products from "./Components/PRODUCTS/Products"
import Main from "./Components/MAIN/Main"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <br/>
          <Hero/>
          <br/>
 
          <div>
              <Switch>
                    <Route exact path = "/" >
                        <Main/>
                    </Route> 

                    <Route path = "/products">
                       <Products />
                    </Route>
              </Switch>
          </div>
        
      </Router>
    </div>
  );
}

export default App;
