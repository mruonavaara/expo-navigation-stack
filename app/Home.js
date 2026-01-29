import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>Welcome to our App!</Text>

      <Link href={'/Settings?user=User'} asChild>
        <Button title='Settings' />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});