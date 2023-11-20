import React, { useContext } from "react"
import { View, Text, TouchableOpacity, TextInput, Dimensions } from "react-native"
import { Colors } from "../constant/Styles"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { SigninStack } from "../types/stackParam"
import { SigninProvider } from "../context/signinContext"

const SigninInput = ({ navigation, route }: SigninStack) => {

  const { setPassword, password, email, setEmail, handleSignIn } = useContext(SigninProvider);


  return (
    <View className="flex-col mx-4">
      {/* email design */}
      <View className="space-y-2 mt-5">
        <Text className="text-lg" style={{ color: Colors.blue }}>Email</Text>
        <TouchableOpacity activeOpacity={0.9} className="border flex-row p-3 border-1 items-center" style={{ borderColor: Colors.grey, backgroundColor: Colors.light }}>
          <MaterialCommunityIcons name="email-outline" size={20} style={{ color: Colors.darkBlue }} />
          <TextInput
            className="flex-1 ml-2 text-sm"
            placeholder="Enter Your Email"
            autoCorrect={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </TouchableOpacity>
      </View>
      <View className="space-y-2 mt-5">
        <Text className="text-lg" style={{ color: Colors.blue }}>Password</Text>
        <TouchableOpacity activeOpacity={0.9} className="border flex-row p-3 items-center" style={{ borderColor: Colors.grey, backgroundColor: Colors.light }}>
          <MaterialIcons name="person-outline" size={20} style={{ color: Colors.darkBlue }} />
          <TextInput
            className="flex-1 ml-2 text-sm"
            placeholder="Enter Your Password"
            autoCorrect={true}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <TouchableOpacity activeOpacity={0.9} className="border p-3"
          onPress={handleSignIn}
          style={{ borderColor: Colors.grey, backgroundColor: Colors.blue }}
        >
          <Text className="text-lg text-center" style={{ color: Colors.light }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <View className="flex-row items-center justify-center mt-3 space-x-2">
          <Text className="text-sm">You have an account</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Login")}>
            <Text className="text-sm" style={{ color: Colors.darkBlue }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SigninInput