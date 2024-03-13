import { View, ScrollView } from 'react-native';
import type { Movie } from '../../../core/entities/movie.entity';
import { PosterMovie } from './PosterMovie';

interface PosterCarouselProps {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({
  height = 440,
  movies,
}: PosterCarouselProps) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <PosterMovie key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
