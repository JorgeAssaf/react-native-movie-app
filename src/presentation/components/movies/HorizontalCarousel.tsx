import { useEffect, useRef } from 'react';
import {
  FlatList,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import type { Movie } from '../../../core/entities/movie.entity';
import { PosterMovie } from './PosterMovie';

interface HorizontalCarouselProps {
  movies: Movie[];
  title?: string;
  loadMore?: () => void;
}

export const HorizontalCarousel = ({
  movies,
  title,
  loadMore,
}: HorizontalCarouselProps) => {
  const loading = useRef(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (loading.current) {
      return;
    }

    const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;

    const isEnd =
      layoutMeasurement.width + contentOffset.x + 900 >= contentSize.width;
    if (!isEnd) {
      return;
    }

    loading.current = true;

    loadMore && loadMore();
  };
  useEffect(() => {
    const tick = setTimeout(() => {
      loading.current = false;
    }, 170);

    return () => {
      clearTimeout(tick);
    };
  }, [movies]);

  return (
    <View style={{ height: title ? 290 : 250 }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            color: '#000',
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 20,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id} - ${i}`}
        data={movies}
        renderItem={({ item }) => (
          <PosterMovie movie={item} height={200} width={140} />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
