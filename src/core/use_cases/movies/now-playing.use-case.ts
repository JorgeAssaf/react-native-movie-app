import type { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import type { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db-response';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';


export const nowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    const nowPlayingMovies = new Set(nowPlaying.results.map(MovieMapper.mapFromMovieDbResponseToMoviesEntity));

    return [...nowPlayingMovies];

  } catch (error) {

    console.error('Error in nowPlayingUseCases', error);
    throw new Error('Error in nowPlayingUseCases' + error);
  }

};
