import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaPrinciapal from './views/paginaPrincipal';
import PaginaCarregamento from './views/paginaCadastro';
import PaginaConsulta from './views/paginaConsulta';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#312F42',
    text: '#fff',
    notification: '#312F42',
    backgroung: '#fff'
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='SPIS Inventory' component={PaginaPrinciapal}/>
        <Stack.Screen name='Cadastro' component={PaginaCarregamento}/>
        <Stack.Screen name='Pesquisa' component={PaginaConsulta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}