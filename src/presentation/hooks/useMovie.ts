import { useCallback, useEffect, useState } from 'react';
import { movieFecher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { getMovieByIdUseCase } from '../../core/use_cases';
import { getCastUseCase } from '../../core/use_cases/movie/get-cast.use-case';

import type { Cast } from '../../core/entities/cast.entity';

export const useMovie = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  const loadMovie = useCallback(async () => {
    setIsLoading(true);
    try {
      const [movieData, castData] = await Promise.all([
        getMovieByIdUseCase(movieFecher, id),
        getCastUseCase(movieFecher, id),
      ]);
      setCast(castData);
      setMovie(movieData);
    } catch (error) {
      console.error('Error in nowPlayingMovies', error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  useEffect(() => {
    loadMovie();
  }, [loadMovie]);
  return {
    isLoading,
    cast,
    movie,
  };
};
