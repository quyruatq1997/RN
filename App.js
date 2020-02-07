import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './HomeScreen';
import {AlbumsScreen} from './AlbumsScreen';
import {DetailScreen} from './DetailScreen';

const Stack = createStackNavigator();

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Albums" component={AlbumsScreen}/>
                    <Stack.Screen name="Detail" component={DetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}


