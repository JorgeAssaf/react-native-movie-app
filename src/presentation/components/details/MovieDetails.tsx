import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Formatter } from '../../../config/helpers/formats';
import type { Cast } from '../../../core/entities/cast.entity';
import type { FullMovie } from '../../../core/entities/movie.entity';
import { CastActor } from '../cast/CastActor';

interface MovieDetailsProps {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: MovieDetailsProps) => {
  return (
    <View style={styles.marginContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text style={styles.subTitle}>★{movie?.popularity.toFixed(2)}</Text>
        <Text style={styles.subTitle}>|</Text>
        <Text style={styles.subTitle}>{movie.genres.join(', ')}</Text>
      </View>
      <Text style={styles.subTitle}>
        {Formatter.dateFormat(movie.release_date)}
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.subTitle}>{movie?.overview}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.subTitle}>
          {Formatter.currencyFormat(movie.budget)}
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Actores</Text>
        <FlatList
          style={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          data={cast}
          horizontal
          getItemLayout={(_, index) => ({
            length: 120 + 16,
            offset: (120 + 16) * index,
            index,
          })}
          renderItem={({ item }) => <CastActor actor={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
});
