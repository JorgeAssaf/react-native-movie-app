import { Image, StyleSheet, Text, View } from 'react-native';
import type { Cast } from '../../../core/entities/cast.entity';

interface CastActorProps {
  actor: Cast;
}

export const CastActor = ({ actor }: CastActorProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.avatar }} style={styles.actorImage} />

      <View style={styles.actotInfo}>
        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>
          {actor.name}
        </Text>
        <Text style={{ color: '#000' }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: 120,
  },
  actorImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  actotInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    color: '#000',
  },
});
