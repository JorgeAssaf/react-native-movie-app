import type { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { CastResponse } from '../../../infrastructure/interfaces/movie-db-response';
import { CastMapper } from '../../../infrastructure/mappers/cast.mapper';
import type { Cast } from '../../entities/cast.entity';


export const getCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {

  try {
    const { cast } = await fetcher.get<CastResponse>(`/${movieId}/credits`);
    const actors = cast.map((actor) => (CastMapper.fromMovieDbToEntity(actor)));
    return actors;
  } catch (error) {
    throw new Error('Error getting cast');
  }
};
