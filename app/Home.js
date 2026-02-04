import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>Welcome to our App!</Text>

      <Link
        href={{
          pathname: '/Settings',
          params: {
            user: 'User'
          }
        }}
        asChild
      >
        <Button title='Settings' />
      </Link>

      {/*
        // Yksinkertainen tekstilinkki, parametri query-parametrina: 
        <Link href={'/Settings?user=User'}>Settings</Link> 
      */}
    </View >
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