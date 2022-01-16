import movie from "./movie.json";
import styles from "./movieDetails.module.css";
export function MovieDetails(){
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return( <div className={styles.detailsContainer}>
        <img className={styles.movieImage + " "+styles.col} src={imageUrl} alt={movie.title} />
        <div className={styles.movieDetails+" "+styles.col}>
        <p className={styles.firstItem}><strong>Titulo</strong>:{movie.title}</p>
        <p><strong>Genero: </strong>{movie.genres.map(genre =>genre.name).join(", ")}</p>
        <p><strong>Descripcion</strong>:{movie.overview}</p>
        </div>
    </div>);
}