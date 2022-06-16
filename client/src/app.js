import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Navbar/Searchbar/SearchBar';
import Form from './components/Form/Form';
import {getProducts} from './actions/products';
import Auth from "./components/Auth/Auth";


const App = () => {
  const [currentId, setCurrentId] = useState(null);


  return(
    <Router>
      <div className="App flex flex-col h-screen">
        <Navbar />
        <Switch>
          <Route path="/add">
            <Form/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/">
            <Content currentId={currentId} setCurrentId={setCurrentId}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;