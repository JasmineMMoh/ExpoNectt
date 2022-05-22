import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import CheckBox from "@react-native-community/checkbox";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignInScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    checkTextInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barstyle="light-content" />
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Icon name="arrow-back" style={styles.arrowIcon} size={26} />
          </TouchableOpacity>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        {/* Footer */}
        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.footer, { backgroundColor: colors.background }]}
        >
          {/* Email Field */}
          <Text style={[styles.text_footer, { color: colors.text }]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Please enter your email"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* Password Field */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
              ,
              { color: colors.text },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Please enter your password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* confirm Password Field */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
              ,
              { color: colors.text },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Comfirm password"
              placeholderTextColor="#666666"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={[styles.wholeText, { color: colors.text }]}>
            By registering, you comfirm that you accept our{" "}
            <TouchableOpacity
              onPress={() => navigation.navigate("TermsOfUseScreen")}
            >
              <Text style={styles.coloredText}>Terms of Use </Text>
            </TouchableOpacity>
            and{" "}
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicyScreen")}
            >
              <Text style={styles.coloredText}>Privacy Policy</Text>
            </TouchableOpacity>
          </Text>

          {/* Sign up */}
          <View style={styles.button}>
            <TouchableOpacity
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
              onPress={() => navigation.navigate("EmailVerification")}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Register
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Sign in*/}
            <Text style={[styles.alreadyAccount, { color: colors.text }]}>
              Already hava an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={[styles.loginBack]}>Log in</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </HideKeyboard>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  footer: {
    flex: 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  arrowIcon: {
    color: "#fff",
    top: 25,
    left: 10,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 20,
  },
  text_footerr: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 30,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  textInputt: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 10,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loginBack: {
    color: "#009387",
    fontWeight: "bold",
    marginLeft: 280,
    marginTop: -17,
  },
  alreadyAccount: {
    marginLeft: 70,
    marginTop: 10,
  },
  coloredText: {
    color: "#009387",
    top: 3,
  },
  wholeText: {
    marginTop: 40,
    marginBottom: -5,
  },
});
