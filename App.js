import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Screens
import Home from "./screens/Home";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="products"
          component={Products}
          options={{
            tabBarLabel: "Products",
            tabBarIcon: ({ color, size }) => (
              <Icon name="clipboard" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart-sharp" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});