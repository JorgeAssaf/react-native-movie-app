import { ActivityIndicator, Platform, View } from 'react-native';

export const LoaderMovie = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 40}
        color="indigo"
      />
    </View>
  );
};
