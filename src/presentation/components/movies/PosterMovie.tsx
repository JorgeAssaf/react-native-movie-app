import {
  Image,
  Pressable,
  StyleSheet,
  type PressableProps,
  View,
} from 'react-native';
import type { Movie } from '../../../core/entities/movie.entity';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';

interface PosterMovieProps extends PressableProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const PosterMovie = ({
  movie,
  height = 400,
  width = 300,
}: PosterMovieProps) => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => {
        navigate.navigate('Details', { movieId: movie.id });
      }}
      style={({ pressed }) => [
        {
          height,
          width,
          marginHorizontal: 10,
          opacity: pressed ? 0.8 : 1,
        },
      ]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: movie.poster }} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
