import type { FullMovie, Movie } from '../../core/entities/movie.entity';
import type { FullMovieResponse, Result } from '../interfaces/movie-db-response';




export class MovieMapper {
  static mapFromMovieDbResponseToMoviesEntity(result: Result): Movie {
    return {

      id: result.id,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      title: result.title,
      overview: result.overview,
      popularity: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      release_date: new Date(result.release_date),

    };
  }
  static mapFromMovieDbResponseToFullMovieEntity(result: FullMovieResponse): FullMovie {
    return {
      id: result.id,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      title: result.title,
      overview: result.overview,
      popularity: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      release_date: new Date(result.release_date),
      budget: result.budget,
      genres: result.genres.map((genre) => genre.name),
      original_language: result.original_language,
      status: result.status,
      video: result.video,
      original_title: result.original_title,
      production_companies: result.production_companies,
      production_countries: result.production_countries,
      spoken_languages: result.spoken_languages,
    };
  }
}
