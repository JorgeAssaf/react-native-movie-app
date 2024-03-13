import type { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { MovieDetails } from '../../components/details/MovieDetails';
import { MovieHeader } from '../../components/details/MovieHeader';
import { useMovie } from '../../hooks/useMovie';
import type { RootStackParams } from '../../navigation/StackNavigator';
import { LoaderMovie } from '../../components/loaders/LoaderMovie';

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);
  if (isLoading) {
    return <LoaderMovie />;
  }
  return (
    <ScrollView>
      {movie ? (
        <>
          <MovieHeader {...movie} />
          <MovieDetails movie={movie} cast={cast} />
        </>
      ) : (
        <Text>Movie not found</Text>
      )}
    </ScrollView>
  );
};
