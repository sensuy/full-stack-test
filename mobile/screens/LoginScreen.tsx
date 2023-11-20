import React, { useContext, useEffect } from "react"

import { StatusBar } from "expo-status-bar"
import { LoginStack } from "../types/stackParam"
import { styles } from "../constant/Styles"
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import LottieView from "lottie-react-native"
import LoginInput from "../components/loginInput"

const { width, height } = Dimensions.get("window")

const LoginScreen = ({ navigation, route }: LoginStack) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Title and Description */}
        <SafeAreaView style={styles.SafeArea}>
          <View style={{ width: width, height: height * 0.3 }}>
            <LottieView source={require('../assets/animations/beer.json')} autoPlay loop />
          </View>
        </SafeAreaView>
        <LoginInput navigation={navigation} route={route} />
      </ScrollView>
      <StatusBar style={"dark"} />
    </View>
  )
}

export default LoginScreen