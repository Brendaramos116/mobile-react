import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Card from './components/Card';
import Pagina2 from './screens/Pagina2';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>

      <Pagina2 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'blue',
    boderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 20,
    marginBottom: 20,
    borderBottomColor: 'red',
    boderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red'
  },
  paragrafo: {
    fontStyle: 20
  }
});
