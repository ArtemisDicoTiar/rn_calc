import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Window} from "./Window";
import {Buttons} from "./Buttons";
import {set} from "react-native-reanimated";

export const Calculator = () => {
    const [calcResult, setCalcResult] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [operator, setOperator] = useState('');
    const [prevCalcResult, setPrevCalcResult] = useState([]);

    return (
        <View style={styles.container}>
            <Window style={styles.window} calcResult={calcResult}/>
            <Buttons style={styles.buttons}
                     operator={operator}
                     setOperator={setOperator}
                     calcResult={calcResult}
                     setCalcResult={setCalcResult}
                     prevCalcResult={prevCalcResult}
                     setPrevCalcResult={setPrevCalcResult}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    window: {
        flex: 4,
        paddingLeft: '3%',
        paddingRight: '3%',

    },
    buttons: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '15%',

        paddingLeft: '3%',
        paddingRight: '3%'

    }
});
