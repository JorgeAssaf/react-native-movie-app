import { useEffect, useState } from 'react';
import {
  moviesPopularUseCase,
  moviesTopRateUseCase,
  moviesUpcomingUseCase,
  nowPlayingUseCase,
} from '../../core/use_cases';

import { movieFecher } from '../../config/adapters/movieDB.adapter';

import type { Movie } from '../../core/entities/movie.entity';

let popularPageNumber: number = 1;
let topRatedPageNumber: number = 1;
let upcomingPageNumber: number = 1;


export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    try {
      const [nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies] =
        await Promise.all([
          nowPlayingUseCase(movieFecher),
          moviesUpcomingUseCase(movieFecher),
          moviesPopularUseCase(movieFecher),
          moviesTopRateUseCase(movieFecher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setUpcoming(upcomingMovies);
      setPopular(popularMovies);
      setTopRated(topRatedMovies);
    } catch (error) {
      console.error('Error in initialLoad', error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    nowPlaying,
    upcoming,
    popular,
    topRated,


    async popularNextPage() {
      popularPageNumber++;
      try {
        const newPopularMovies = await moviesPopularUseCase(
          movieFecher, {
          page: popularPageNumber,
        }
        );
        setPopular([...popular, ...newPopularMovies]);
      } catch (error) {
        console.error('Error in popularNextPage', error);
      }
    },
    async topRatedNextPage() {
      topRatedPageNumber++;
      try {
        const newTopRatedMovies = await moviesTopRateUseCase(
          movieFecher, {
          page: topRatedPageNumber,
        }
        );
        setTopRated([...topRated, ...newTopRatedMovies]);
      } catch (error) {
        console.error('Error in topRatedNextPage', error);
      }
    },
    async upcomingNextPage() {
      upcomingPageNumber++;
      try {
        const newUpcomingMovies = await moviesUpcomingUseCase(
          movieFecher, {
          page: upcomingPageNumber,
        }
        );
        setUpcoming([...upcoming, ...newUpcomingMovies]);
      } catch (error) {
        console.error('Error in upcomingNextPage', error);
      }
    },
  };
};
