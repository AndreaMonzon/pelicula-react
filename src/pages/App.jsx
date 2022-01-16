import { MoviesGrid } from "../components/MoviesGrid";

import styles from "./App.module.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { LandingPages } from "./LandingPages";
  
export function App(){
    return (<Router>
        <header>
         <Link to="/"><h1 className={styles.title}>Peliculas</h1> </Link>
        
        </header>
        <main>
        <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails/>
          </Route>
          <Route  path="/">
            <LandingPages/>
           </Route>
        </Switch>
        </main>
    </Router>);
}