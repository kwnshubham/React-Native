// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('DemoReactProject', () => App);

//import library 
import React, {Component}from 'react';
import {View, AppRegistry} from 'react-native';
import PizzaTranslator from './App';
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
//Create component******
const App = () =>  (
   
    // <PizzaTranslator/>
    <View>
    <Header  headerText={'Home'}/>//reuse this header component
    <AlbumList />
    </View>
);



// Render It to device*****
AppRegistry.registerComponent('DemoReactProject', () => App);
