import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/Components/Navigation';
import Login from './src/Screens/';
import Register from './src/Screens/Register';
import System from './src/Screens/';




export default function App() {
    // const [Name, setName] = useState("Hunaiza Solanki");
    // const [Email, setEmail] = useState("huniisolanki10@gmail.com");
    return (
        <Navigation />
    );
}

