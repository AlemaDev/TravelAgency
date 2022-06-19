import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Auth from "./components/Auth/Auth";


const App = () => {

  return(
    <Router>
      <div className="App flex flex-col h-screen">
        <Switch>
          <Route path="/add">
            <Form/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/">
            <Navbar />
            <Content />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;