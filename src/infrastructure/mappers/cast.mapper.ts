import type { Cast } from '../../core/entities/cast.entity';
import type { MovieDBCast } from '../interfaces/movie-db-response';

export class CastMapper {
  static fromMovieDbToEntity(cast: MovieDBCast): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character || 'No character found',
      avatar: cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
