import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Card from './components/Card';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina3 from './screens/Pagina3';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';
import Estado from './screens/Estado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="estado" component={Estado} options={{ title: "Use State" }} />
          <Stack.Screen name="objeto" component={Objeto} options={{ title: "Objeto" }} />
          <Stack.Screen name="arrays" component={Arrays} options={{ title: "Arrays" }} />
          <Stack.Screen name="pagina1" component={Pagina1} options={{ title: "Página Principal" }} />
          <Stack.Screen name="pagina2" component={Pagina2} options={{ title: "Página 2" }} />
          <Stack.Screen name="pagina3" component={Pagina3} options={{ title: "Página 3" }} />
        </Stack.Navigator>
      </NavigationContainer>


    </>
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
