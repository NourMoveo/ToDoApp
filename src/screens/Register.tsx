import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: "poppins-bold",
                            marginVertical: Spacing * 3,
                        }}
                    >
                        Create account
                    </Text>
                    <Text
                        style={{
                            fontFamily: "poppins-regular",
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",
                        }}
                    >
                        Sign up to unlock access and explore all your to-do list features
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" />
                    <AppTextInput placeholder="Confirm Password" />
                </View>

                <TouchableOpacity
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.primary,
                        marginVertical: Spacing * 3,
                        borderRadius: Spacing,
                        shadowColor: Colors.primary,
                        shadowOffset: {
                            width: 0,
                            height: Spacing,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "poppins-bold",
                            color: Colors.onPrimary,
                            textAlign: "center",
                            fontSize: FontSize.large,
                        }}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Login")}
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "poppins-semiBold",
                            color: Colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Already have an account
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "poppins-semiBold",
                            color: Colors.primary,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Or continue with
                    </Text>

                    <View
                        style={{
                            marginTop: Spacing,
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;