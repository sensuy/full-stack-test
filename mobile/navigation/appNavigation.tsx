import { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStack } from "../types/stackParam"
import LoginScreen from "../screens/LoginScreen"
import SigninScreen from "../screens/SigninScreen"

const Stack = createNativeStackNavigator<RootStack>()

const AppNavigation = () => {

  const [user, setUser] = useState()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}