import type { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import type { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db-response';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
}

export const moviesTopRateUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

  try {
    const upcoming = await fetcher.get<NowPlayingResponse>('/top_rated', { params: { page: options?.page ?? 1 } });
    const upcomingMovies = new Set(upcoming.results.map(MovieMapper.mapFromMovieDbResponseToMoviesEntity));
    return [...upcomingMovies];

  } catch (error) {
    throw new Error('Error in moviesTopRateUseCase' + error);
  }


};
