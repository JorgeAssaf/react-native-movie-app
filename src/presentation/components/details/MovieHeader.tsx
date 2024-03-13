import { useNavigation, type NavigationProp } from '@react-navigation/native';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import type { FullMovie } from '../../../core/entities/movie.entity';
import type { RootStackParams } from '../../navigation/StackNavigator';

export const MovieHeader = ({
  original_title,
  title,
  poster,
}: Pick<FullMovie, 'original_title' | 'title' | 'poster'>) => {
  const { height } = useWindowDimensions();
  const navigate = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <>
      <View style={{ ...styles.imageContainer, height: height * 0.75 }}>
        <View style={styles.imageBorder}>
          <Image source={{ uri: poster }} style={styles.posterImage} />
          <Pressable style={styles.backButton} onPress={navigate.goBack}>
            <Text style={styles.backButtonText}>{'<'} Back</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: '#000',
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 5,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
