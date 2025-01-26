import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Meals from './pages/meals';
import Category from './pages/Category';
import Details from './pages/details/Details';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kategoriler" component={Category} />
        <Stack.Screen name="Yemekler" component={Meals} />
        <Stack.Screen name="Detaylar" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
