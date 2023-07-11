import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Homepage} from './pages/Homepage';
import {AppPage} from './pages/AppPage';
import LeaderBoardPage from './pages/LeaderBoardPage';
function App() {
  return (
    <div className="App">
      <header>

      </header>
      <BrowserRouter>
        <Switch>
        

           <Route exact path="/" component={Homepage} />
           <Route exact path="/AppPage" component={AppPage} />
           <Route exact path="/LeaderBoardPage" component={LeaderBoardPage} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
