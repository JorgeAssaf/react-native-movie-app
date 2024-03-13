import type { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import type { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db-response';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
}

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

  try {
    const upcoming = await fetcher.get<NowPlayingResponse>('/upcoming', { params: { page: options?.page ?? 1 } });

    const upcomingMovies = new Set(upcoming.results.map(MovieMapper.mapFromMovieDbResponseToMoviesEntity));

    return [...upcomingMovies];

  } catch (error) {
    throw new Error('Error in moviesUpcomingUseCase' + error);
  }


};
