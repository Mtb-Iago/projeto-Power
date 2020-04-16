import React from 'react'
import { Image } from 'react-native';
import { Block, Text, Button } from 'expo-ui-kit';
import { createStackNavigator } from '@react-navigation/stack';
import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView

} from '@react-navigation/drawer';
import { Feather, AntDesign } from '@expo/vector-icons';

//import dos screens
import Dashboards from './screens/Dashboards';
import Products from './screens/Products';
import Services from './screens/Services';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () => (
                <Button
                    transparent
                    marginHorizontal
                    padding onPress={() => navigation.openDrawer()}>
                    {/*ADD BOTAO MENU*/}
                    <Feather name="menu" size={20} />
                </Button>
            )
        }}>
            <Stack.Screen name="Dashboards" component={Dashboards} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Services" component={Services} />
        </Stack.Navigator>
    );
};

// Custom drawer menu

const DrawerContent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Block>
                {/* add avatar*/}
                <Block flex={0.4} margin={90} button>


                    <Image

                        source={require('../assets/logo.png')}

                        resizeMode="center"
                        style={{ borderRadius: 30, height: 60, width: 90, backgroundColor:'black' }}
                    />
                    <Text title resizeMode="center"> Menu de opções</Text>
                    <Text size={9}> Nybinghi Technology</Text>
                </Block>
                {/* <DrawerItemList {...props} /> */}
                <DrawerItem
                    label="Dashboards"
                    labelStyle={{ marginLeft: -16 }}
                    onPress={() => props.navigation.navigate("Dashboards")}
                    icon={() => <AntDesign name="dashboard" color="red" size={16} />}
                />
                <DrawerItem
                    label="Products"
                    labelStyle={{ marginLeft: -16 }}
                    onPress={() => props.navigation.navigate("Products")}
                    icon={() => <AntDesign name="message1" color="red" size={16} />}
                />
                <DrawerItem
                    label="Services"
                    labelStyle={{ marginLeft: -16 }}
                    onPress={() => props.navigation.navigate("Services")}
                    icon={() => <AntDesign name="phone" color="red" size={16} />}
                />
            </Block>
        </DrawerContentScrollView>
    );
}

export default () => {
    return (

        <Drawer.Navigator
            drawerType="slide"
            overlayColor="transparent"
            initialRouteName="Dashboards"
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Screens" component={Screens} />


        </Drawer.Navigator>

    )
};
