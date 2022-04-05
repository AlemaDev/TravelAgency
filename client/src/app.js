import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/SearchBar';
import Form from './components/Form/Form';
import {getProducts} from './actions/products';


const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState ('');




  return(
    <Router>
      <div className="App">
        <Navbar />
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <Switch>
          <Route path="/add">
            <Form/>
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