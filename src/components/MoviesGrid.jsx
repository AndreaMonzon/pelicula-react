import movies from "./movies.json";
import { MoviesCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css"
export function MoviesGrid(){

    return(
        <ul  className={styles.moviesGrid}>
           {
               movies.map((movies)=> (<MoviesCard key={movies.id} movie={movies}/>)
               )
           } 
        </ul>
    );
}