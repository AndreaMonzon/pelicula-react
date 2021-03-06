import styles from "./MoviesCard.module.css";
import{Link} from "react-router-dom";
export function MoviesCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (<li className={styles.movieCard} >
        <Link to={"/movies/" +movie.id}>
        <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
        <div> {movie.title}</div></Link></li>);
}