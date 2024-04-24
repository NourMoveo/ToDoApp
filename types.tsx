import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    Tasks: undefined;
    AddTask: undefined;
    Settings: undefined;
    SettingsDetails: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;