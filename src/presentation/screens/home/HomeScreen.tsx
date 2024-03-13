import { ScrollView, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { LoaderMovie } from '../../components/loaders/LoaderMovie';

export const HomeScreen = () => {
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
    topRatedNextPage,
    upcomingNextPage,
  } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return <LoaderMovie />;
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title="Popular"
          loadMore={popularNextPage}
        />
        <HorizontalCarousel
          movies={topRated}
          title="Top Rated"
          loadMore={topRatedNextPage}
        />
        <HorizontalCarousel
          movies={upcoming}
          title="Upcoming"
          loadMore={upcomingNextPage}
        />
      </View>
    </ScrollView>
  );
};
