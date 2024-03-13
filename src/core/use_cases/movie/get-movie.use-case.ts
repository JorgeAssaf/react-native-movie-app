import type { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import type { FullMovieResponse } from '../../../infrastructure/interfaces/movie-db-response';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  id: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<FullMovieResponse>(`/${id}`);
    return MovieMapper.mapFromMovieDbResponseToFullMovieEntity(movie);
  } catch (error) {
    throw new Error('Error in getMovieByIdUseCase' + error);
  }
};
