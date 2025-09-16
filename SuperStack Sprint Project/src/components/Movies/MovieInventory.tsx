import movie from '../../data/movie_inventory.json';

/*
The initial components for Movies specific to customer inventory. 
It extracts object from .Json and maps to web-page.
*/ 
export function Movies(){
return(
    <section className="movies">
      <h4>Movies</h4>
      <ul className="movie__list">
        {movie.map(({title, year, description},index) => (
          <li key={index}>
            <strong>{title},({year})</strong>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
    
);

}